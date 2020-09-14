import { baseResolver } from '~/common/base-resolver';
import { Context } from '~/context/create-context';
import { InvalidEmailConfirmTokenError } from '~/error/invalid-email-confirm-token-error';
import { UserNotFoundError } from '~/error/user-not-found-error';
import { JwtTokens } from '~/helper/jwt-tokens';

const resolver = async (parent, { email, emailConfirmToken }, context: Context, info) => {
  const user = await context.prisma.user.findOne({ where: { email } });

  if (!user) {
    throw new UserNotFoundError();
  }

  if (user.emailConfirmToken !== emailConfirmToken || user.emailConfirmed) {
    throw new InvalidEmailConfirmTokenError();
  }

  const updatedUser = await context.prisma.user.update({
    where: { id: user.id },
    data: { emailConfirmToken: null, emailConfirmed: true },
  });

  return {
    token: JwtTokens.sign({ userId: user.id }),
    user: updatedUser,
  };
};

export const confirmEmail = baseResolver.createResolver(resolver);
