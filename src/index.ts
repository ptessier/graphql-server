import { config } from '~/config';
import { context } from '~/context/create-context';
import { createServer } from '~/create-server';
import { log } from '~/logger';
import { resolvers } from '~/resolvers';
import { typeDefs } from '~/typeDefs';

const server = createServer({
  context,
  typeDefs,
  resolvers,
});

const options = config.options();

log.info('Starting server.', options);

options.subscriptions = {
  onConnect: (connectionParams, _webSocket, _context) => {
    log.info('webSocket connected', connectionParams);

    return connectionParams;
  },
  onDisconnect: (_webSocket, _context) => {
    log.info('webSocket disconnected');
  },
};

server.start(options, () => {
  log.info(`Server is running on http://localhost:${options.port}`);

  if (options.playground) {
    log.info(`GraphQL playground is running on http://localhost:${options.port}${options.playground}`);
  }
});
