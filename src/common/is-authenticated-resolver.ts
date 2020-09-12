import { baseResolver } from '~/common/base-resolver';
import { Context } from '~/context/create-context';
import { AuthenticationRequiredError } from '~/error/authentication-required-error';

export const isAuthenticatedResolver = baseResolver.createResolver(
  // Check if there's a viewer
  (_, __, { viewer }: Context, ___) => {
    if (!viewer) {
      throw new AuthenticationRequiredError();
    }
  },
);
