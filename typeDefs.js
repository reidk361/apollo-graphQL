const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Movie {
    title: String
    year: Int
    reviews: [Review]
  }
  type Review {
      author: String
      title: String
      body: String
  }
  type Query {
    movies: [Movie]
  }
`;

module.exports = typeDefs;