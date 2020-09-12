import { isInstance } from 'apollo-errors';
import { createResolver } from 'apollo-resolvers';
import { config } from '~/config';
import { UnknownError } from '~/error/unknown-error';

export const baseResolver = createResolver(
  // incoming requests will pass through this resolver like a no-op
  null,

  // Only mask outgoing errors that aren't already base-errors
  (_, __, ___, error) => {
    return isInstance(error) || config.isDevelopment() ? error : new UnknownError();
  },
);
