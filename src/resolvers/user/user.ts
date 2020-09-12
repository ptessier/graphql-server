import { baseResolver } from '~/common/base-resolver';
import { Context } from '~/context/create-context';

interface Args {
  id: string;
}

const resolver = (obj, { id }: Args, context: Context, info) => context.prisma.user.findOne({ where: { id: +id } });

export const user = baseResolver.createResolver(resolver);
