'use strict';

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const LOCK_FILE = '/tmp/chatbot-reindex.lock';
const LOG_FILE = '/srv/TuanSP/DACN_TourGuideWeb/index-tours-cron.log';
const SCRIPT = '/srv/TuanSP/DACN_TourGuideWeb/index-tours-cron.sh';
const STATUS_FILE = '/tmp/chatbot-reindex-status.json';

function pidAlive(pid) {
  try { process.kill(pid, 0); return true; } catch { return false; }
}

function readLockPid() {
  if (!fs.existsSync(LOCK_FILE)) return null;
  const raw = fs.readFileSync(LOCK_FILE, 'utf8').trim();
  const pid = parseInt(raw, 10);
  return Number.isFinite(pid) ? pid : null;
}

function readStatus() {
  if (!fs.existsSync(STATUS_FILE)) return null;
  try { return JSON.parse(fs.readFileSync(STATUS_FILE, 'utf8')); } catch { return null; }
}

function writeStatus(obj) {
  fs.writeFileSync(STATUS_FILE, JSON.stringify(obj));
}

function tailLog(maxLines = 80) {
  if (!fs.existsSync(LOG_FILE)) return '';
  const raw = fs.readFileSync(LOG_FILE, 'utf8');
  const lines = raw.split('\n');
  return lines.slice(-maxLines).join('\n');
}

module.exports = {
  async trigger(ctx) {
    const existingPid = readLockPid();
    if (existingPid && pidAlive(existingPid)) {
      ctx.status = 409;
      ctx.body = { error: { status: 409, message: 'Reindex already running', pid: existingPid } };
      return;
    }
    if (existingPid) {
      try { fs.unlinkSync(LOCK_FILE); } catch {}
    }

    const child = spawn('/bin/bash', [SCRIPT], {
      detached: true,
      stdio: 'ignore',
    });
    fs.writeFileSync(LOCK_FILE, String(child.pid));
    writeStatus({
      status: 'running',
      started_at: new Date().toISOString(),
      pid: child.pid,
    });
    child.unref();

    ctx.status = 202;
    ctx.body = { data: { status: 'started', pid: child.pid, started_at: new Date().toISOString() } };
  },

  async status(ctx) {
    const lockPid = readLockPid();
    const running = lockPid != null && pidAlive(lockPid);

    if (!running && lockPid != null) {
      try { fs.unlinkSync(LOCK_FILE); } catch {}
      const prev = readStatus();
      if (prev && prev.status === 'running') {
        const tail = tailLog(200);
        const success = /Indexing completed successfully/.test(tail);
        writeStatus({
          ...prev,
          status: success ? 'done' : 'failed',
          finished_at: new Date().toISOString(),
        });
      }
    }

    const stored = readStatus();
    ctx.body = {
      data: {
        running,
        pid: running ? lockPid : null,
        status: running ? 'running' : (stored?.status || 'idle'),
        started_at: stored?.started_at || null,
        finished_at: stored?.finished_at || null,
        log_tail: tailLog(80),
      },
    };
  },
};
