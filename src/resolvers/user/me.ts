import { isAuthenticatedResolver } from '~/common/is-authenticated-resolver';
import { Context } from '~/context/create-context';

const resolver = (parent, args, context: Context, info) =>
  context.prisma.user.findOne({ where: { id: context.viewer.userId } });

export const me = isAuthenticatedResolver.createResolver(resolver);
