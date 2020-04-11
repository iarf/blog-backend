const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');



const typeDefs = fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8");

const PORT = process.env.PORT || 5000;

// #### RESOLVERS ######
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');

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

server.listen(PORT)
    .then(console.log(`Server running on port ${PORT}`));
