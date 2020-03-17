import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    age: Int
    active: Boolean!
  }

  type Query {
    getUser(id: Int): User
    getUsers: [User]
  }
`;

export default typeDefs;