const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');



const typeDefs = fs.readFileSync(path.join(__dirname, "lib/schema.graphql"), "utf8");

const PORT = process.env.PORT || 5000;

// #### RESOLVERS ######
const Mutation = require('./lib/resolvers/Mutation');
const Query = require('./lib/resolvers/Query');

const resolvers = {
    Query,
    Mutation
}
// ######################

// ### SERVER ##########
const server = new ApolloServer ({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const token = req.headers.authorization
        return {
            token
        }
    }
});

const runBackend = () => {
    server.listen(PORT)
        .then(console.log(`API server running on port ${PORT}`));
}

//run the server
runBackend();

//export for using with frontend
module.exports = {
    runBackend,
}