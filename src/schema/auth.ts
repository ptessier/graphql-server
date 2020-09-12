export default `
  type Mutation {
    # Everyone can signup
    signup(email: String!, password: String!): AuthPayload!

    # Signup with invite token
    signupByInvite(email: String!, inviteToken: String!, password: String!): AuthPayload!

    # Everyone can login
    login(email: String!, password: String!): AuthPayload!

    # Invite a user
    inviteUser(email: String!): User!

    # Send reset password email
    sendResetPassword(email: String!): User!

    # Change password
    changePassword(email: String!): User!

    # Confirm email
    confirmEmail(email: String!, emailConfirmToken: String!): User!
  }

  type AuthPayload {
    token: String!
    user: User!
  }
`;
