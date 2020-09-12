import { baseResolver } from '~/common/base-resolver';
import { Context } from '~/context/create-context';

const resolver = ({ user: { id } }, args, context: Context, info) => context.prisma.user.findOne({ where: { id } });

export const AuthPayload = {
  user: baseResolver.createResolver(resolver),
};
