import { UserOrderByInput } from '@prisma/client';
import { baseResolver } from '~/common/base-resolver';
import { Context } from '~/context/create-context';

interface Args {
  skip?: number;
  take?: number;
  orderBy?: UserOrderByInput;
}

const resolver = async (obj, { skip, take, orderBy }: Args, context: Context, info) => {
  const results = context.prisma.user.findMany({
    skip,
    take,
    orderBy,
  });

  return results;
};

export const users = baseResolver.createResolver(resolver);
