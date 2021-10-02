const buildResolvers = db => ({
    Query: {
      movies: () => db.collection("movies").find({}).toArray(),
    },
    Mutation: {
        addMovie: async (parent, args) => {
        const result = await db.collection("movies").insertOne({...args});
        return result;
        }
    }
});

module.exports = buildResolvers;