const { ApolloServer, gql, PubSub } = require('apollo-server');

const pubsub = new PubSub();
const typeDefs = gql`
  enum Pokemon {
    RED
    GREEN
    BLUE
  }
  type Results {
    red: Int!
    green: Int!
    blue: Int!
  }
  type Query {
    results: Results!
    totalVotes: Int!
  }
  type Mutation {
    vote(pokemon: Pokemon): String!
  }
  type Subscription {
    results: Results!
  }
`;

let red = 0;
let green = 0;
let blue = 0;

const resolvers = {
  Query: {
    results: () => ({ red, green, blue }),
    totalVotes: () => red + green + blue
  },
  Mutation: {
    vote: (parent, { pokemon }) => {
      const inc = 1;
      if (pokemon === 'RED') {
        red += inc;
      } else if (pokemon === 'GREEN') {
        green += inc;
      } else if (pokemon === 'BLUE') {
        blue += inc;
      }

      return 'Thanks for voting!';
    }
  }
};

const context = { pubsub };
const server = new ApolloServer({ typeDefs, resolvers, context });

server.listen().then(({ url }) => console.log(`Server running on port ${url}`));
