const {gql} = require('apollo-server')

//for creating schema
const typeDefs = gql`
    type User{
        id:ID!
        name:String!
        username:String!
        age:Int!
        nationality:Nationality!
        friends:[User]
        favoriteMovies:[Movie]
    }
    type Movie{
        id:ID!
        name:String!
        yearOfPublication:Int
        islnTheaters:Boolean!
    }
    input CreateUserInput{
        name:String!
        username:String!
        age:Int!
        nationality:Nationality = Indian
    }
    input UpdateUsernameInput{
        id:ID!
        newUsername:String!
    } 
    type Mutation{
        createUser(input:CreateUserInput!):User
        updateUsername(input:UpdateUsernameInput!):User
        deleteUser(id:ID!):User
    }

    type Query{
        users:[User!]!
        user(id:ID!): User!
        movies:[Movie!]!
        movie(name:String!):Movie
        
    }
    enum Nationality{
        Canadian
        Indian
    }
`

module.exports = {typeDefs};