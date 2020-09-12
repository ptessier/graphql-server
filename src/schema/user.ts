export default `
  type Query {
    me: User

    user(id: ID!): User

    users(skip: Int, take: Int, orderBy: UserOrderByInput): [User!]!
  }

  type User {
    id: ID!
    email: String!
  }

  input UserOrderByInput {
    email: Sort
    createdAt: Sort
  }

  enum Sort {
    asc
    desc
  }
`;
