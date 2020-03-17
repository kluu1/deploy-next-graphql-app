import lodash from 'lodash/collection';

const users = [
  { id: 1, name: 'barney', age: 36, active: true },
  { id: 2, name: 'fred', age: 40, active: false },
  { id: 3, name: 'pebbles', age: 1, active: true },
  { id: 4, name: 'marc', age: 14, active: true }
];

const resolvers = {
  Query: {
    getUser: (_, { id }) => {
      return lodash.find(users, { id });
    },
    getUsers: (_, args) => {
      return users;
    }
  }
};

export default resolvers;
