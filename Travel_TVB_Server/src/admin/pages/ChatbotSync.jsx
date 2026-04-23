import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  Page,
  Layouts,
  useFetchClient,
} from '@strapi/strapi/admin';
import {
  Box,
  Button,
  Flex,
  Typography,
  Status,
  Loader,
  Alert,
} from '@strapi/design-system';
import { Play } from '@strapi/icons';

const POLL_INTERVAL_MS = 2000;

export default function ChatbotSync() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [banner, setBanner] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const pollTimer = useRef(null);
  const { get, post } = useFetchClient();

  const describeError = (e) => {
    const s = e?.response?.status ?? e?.status;
    const msg = e?.response?.data?.error?.message || e?.message || 'Request failed';
    return { status: s, message: msg };
  };

  const fetchStatus = useCallback(async ({ silent } = {}) => {
    try {
      const res = await get('/api/chatbot/reindex/status');
      const payload = res.data?.data ?? res.data;
      setStatus(payload);
      setError(null);
      return payload;
    } catch (e) {
      if (!silent) setError(describeError(e).message);
      return null;
    }
  }, [get]);

  const schedulePoll = useCallback(
    (delay = POLL_INTERVAL_MS) => {
      if (pollTimer.current) clearTimeout(pollTimer.current);
      pollTimer.current = setTimeout(async () => {
        const data = await fetchStatus({ silent: true });
        if (data?.running) {
          schedulePoll(POLL_INTERVAL_MS);
        } else {
          schedulePoll(10000); // idle polling
        }
      }, delay);
    },
    [fetchStatus]
  );

  useEffect(() => {
    fetchStatus();
    schedulePoll(POLL_INTERVAL_MS);
    return () => {
      if (pollTimer.current) clearTimeout(pollTimer.current);
    };
  }, [fetchStatus, schedulePoll]);

  const handleSync = async () => {
    setSubmitting(true);
    setBanner(null);
    setError(null);
    try {
      await post('/api/chatbot/reindex');
      setBanner({
        variant: 'default',
        title: 'Sync started',
        message:
          'Indexing is running in the background. Strapi will restart automatically when done (~45–60s). Refresh the page if polling stops.',
      });
      await fetchStatus({ silent: true });
      schedulePoll(POLL_INTERVAL_MS);
    } catch (e) {
      const { status, message } = describeError(e);
      if (status === 409) {
        setBanner({
          variant: 'default',
          title: 'Already running',
          message: 'A sync is already in progress.',
        });
      } else {
        setError(message || 'Failed to start sync');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const running = !!status?.running;
  const currentStatus = status?.status || 'idle';

  const statusVariant =
    currentStatus === 'running'
      ? 'secondary'
      : currentStatus === 'done'
      ? 'success'
      : currentStatus === 'failed'
      ? 'danger'
      : 'alternative';

  return (
    <Layouts.Root>
      <Page.Title>Chatbot Sync</Page.Title>
      <Layouts.Header
        title="Chatbot Sync"
        subtitle="Manually rebuild the chatbot's knowledge base from current Tour content"
      />
      <Layouts.Content>
        <Flex direction="column" alignItems="stretch" gap={4}>
          {banner && (
            <Alert
              closeLabel="Close"
              title={banner.title}
              variant={banner.variant}
              onClose={() => setBanner(null)}
            >
              {banner.message}
            </Alert>
          )}
          {error && (
            <Alert
              closeLabel="Close"
              title="Error"
              variant="danger"
              onClose={() => setError(null)}
            >
              {error}
            </Alert>
          )}

          <Box
            background="neutral0"
            padding={6}
            shadow="tableShadow"
            hasRadius
          >
            <Flex direction="column" alignItems="stretch" gap={4}>
              <Flex justifyContent="space-between" alignItems="center">
                <Flex direction="column" alignItems="flex-start" gap={1}>
                  <Typography variant="delta">Current status</Typography>
                  <Flex gap={2} alignItems="center">
                    <Status variant={statusVariant} showBullet>
                      <Typography>{currentStatus.toUpperCase()}</Typography>
                    </Status>
                    {running && <Loader small>Indexing…</Loader>}
                  </Flex>
                </Flex>
                <Button
                  startIcon={<Play />}
                  onClick={handleSync}
                  disabled={submitting || running}
                  loading={submitting}
                  size="L"
                >
                  {running ? 'Sync in progress…' : 'Sync now'}
                </Button>
              </Flex>

              {(status?.started_at || status?.finished_at) && (
                <Flex direction="column" alignItems="flex-start" gap={1}>
                  {status.started_at && (
                    <Typography variant="pi" textColor="neutral600">
                      Started: {new Date(status.started_at).toLocaleString()}
                    </Typography>
                  )}
                  {status.finished_at && (
                    <Typography variant="pi" textColor="neutral600">
                      Finished: {new Date(status.finished_at).toLocaleString()}
                    </Typography>
                  )}
                </Flex>
              )}
            </Flex>
          </Box>

          <Box
            background="neutral0"
            padding={6}
            shadow="tableShadow"
            hasRadius
          >
            <Flex direction="column" alignItems="stretch" gap={3}>
              <Typography variant="delta">Recent log output</Typography>
              <Box
                background="neutral100"
                padding={3}
                hasRadius
                style={{
                  fontFamily:
                    'ui-monospace, SFMono-Regular, Menlo, Monaco, monospace',
                  fontSize: '12px',
                  whiteSpace: 'pre-wrap',
                  maxHeight: '400px',
                  overflow: 'auto',
                }}
              >
                {status?.log_tail || '(no log output yet)'}
              </Box>
              <Typography variant="pi" textColor="neutral600">
                Tail of /srv/TuanSP/DACN_TourGuideWeb/index-tours-cron.log
              </Typography>
            </Flex>
          </Box>
        </Flex>
      </Layouts.Content>
    </Layouts.Root>
  );
}
