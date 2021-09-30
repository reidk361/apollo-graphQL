const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017");
const typeDefs = require("./typeDefs");


const movies = [{
    title: 'Django Unchained',
    year: 2012,
    reviews: [{
        author: 'Anthony',
        title: 'My thoughts and feeling',
        body: 'Great movie.'
    }, {
        author: 'Maryus',
        title: 'Original was better.',
        body: 'Prefer Jenga',
    }]
}]

const seed = async () => {
    const connection = await client.connect().catch(console.error);
    const Movies = connection.db("moviesGQL").collection("movies");
    await Movies.deleteMany({}).then(console.log);
    await Movies.insertMany(movies).then(console.log);
    await Movies.find({}).toArray().then(console.log);
    connection.close();
}

seed();