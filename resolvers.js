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

const resolvers = {
    Query: {
        movies: () => movies,
    },
}

module.exports = resolvers;