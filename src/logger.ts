import pino from 'pino';
import { config } from '~/config';

export const log = pino({ level: process.env.LOG_LEVEL || inferDefaultLogLevel() });

function inferDefaultLogLevel() {
  if (config.isProduction()) {
    return 'info';
  }

  return 'debug';
}
