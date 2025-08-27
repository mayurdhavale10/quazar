'use client';

import { TELEMETRY_ENDPOINT } from './constants';

type Payload = Record<string, unknown>;

export async function track(event: string, payload?: Payload) {
  try {
    await fetch(TELEMETRY_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event,
        payload,
        t: Date.now(),
        ua: typeof navigator !== 'undefined' ? navigator.userAgent : 'server',
      }),
      keepalive: true,
    });
  } catch {
    // no-op in client (don’t block UX)
  }
}
