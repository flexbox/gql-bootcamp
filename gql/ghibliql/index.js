const fetch = require('node-fetch');
const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Film {
    id: ID!
    title: String
    description: String
    director: String
    producter: String
    release_date: Int
    rt_score: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    film(id: ID!): Film
    films: [Film]
  }
`;

const resolvers = {
  Query: {
    films: () => fetchFilms()
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

function fetchFilms() {
  const data = fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(json => json);
  return data;
}
