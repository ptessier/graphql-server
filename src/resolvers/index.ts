import { AuthPayload } from '~/resolvers/authentication/auth-payload';
import { changePassword } from '~/resolvers/authentication/change-password';
import { confirmEmail } from '~/resolvers/authentication/confirm-email';
import { inviteUser } from '~/resolvers/authentication/invite-user';
import { login } from '~/resolvers/authentication/login';
import { sendResetPassword } from '~/resolvers/authentication/send-reset-password';
import { signup } from '~/resolvers/authentication/signup';
import { signupByInvite } from '~/resolvers/authentication/signup-by-invite';
import { me } from '~/resolvers/user/me';
import { user } from '~/resolvers/user/user';
import { users } from '~/resolvers/user/users';
import { version } from '~/resolvers/version';

export const resolvers = {
  AuthPayload,
  Query: {
    me,
    user,
    users,
    version,
  },
  Mutation: {
    changePassword,
    confirmEmail,
    inviteUser,
    login,
    sendResetPassword,
    signup,
    signupByInvite,
  },
};
