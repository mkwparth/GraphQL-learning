// console.log("Hello world");
const {ApolloServer} = require('apollo-server')
const {typeDefs} = require('./schema/type-Defs')
const {resolvers} = require('./schema/resolvers')

// to create server
const server = new ApolloServer({
    typeDefs,
    resolvers

})

server.listen(4000).then(({url})=>{
    console.log(`The APi is running on port no :${url}`)
})
