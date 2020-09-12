import compression, { CompressionOptions } from 'compression';
import pino from 'express-pino-logger';
import { GraphQLServer } from 'graphql-yoga';
import { Props } from 'graphql-yoga/dist/types';
import helmet from 'helmet';
import { log } from '~/logger';

export interface Options extends Props {
  compression?: boolean | CompressionOptions;
  helmet?: boolean;
  logging?: boolean;
}

export function createServer(options: Options): GraphQLServer {
  const server: GraphQLServer = new GraphQLServer(options);

  if (options.compression) {
    const compressionOptions = typeof options.compression === 'boolean' ? {} : options.compression;
    server.use(compression(compressionOptions));
  }

  if (options.helmet) {
    server.use(helmet());
  }

  if (options.logging) {
    server.use(pino({ logger: log }));
  }

  return server;
}
