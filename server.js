const { ApolloServer } = require("apollo-server");
const { MongoClient } = require("mongodb");
const typeDefs = require("./typeDefs");
const buildResolvers = require("./buildResolvers");


const client = new MongoClient("mongodb://localhost:27017");

const app = async () => {
  const connection = await client.connect().catch(console.error);
  const db = connection.db("moviesGQL");
  const server = new ApolloServer({ typeDefs, resolvers: buildResolvers(db) });
  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
};

app();
