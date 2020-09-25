module.exports = {
  client: {
    service: {
      name: 'rima-graphql-server',
      url: 'http://localhost:7000/graphql',
    },
    excludes: ['**/__tests__/**', 'src/types/graphql.generated.ts'],
  },
};
