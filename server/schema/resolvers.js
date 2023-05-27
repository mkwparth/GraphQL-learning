const { UserList, movieList } = require('../FakeData')
const _ = require('lodash')
const resolvers = {
    Query: {

        //user Resolvers
        users: () => {
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, { id: Number(id) })
            return user;

        },
        //movie Resolvers
        movies: () => {
            return movieList;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(movieList, { name })
            return movie;
        }
    },
    User: {
        favoriteMovies: () => {

            return _.filter(movieList, (movie) =>
                movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
            )
        }
    },

    // for mutating the data
    Mutation: {
        // it;s for creating user 
        createUser: (parent, args) => {
            /**
             * Here input is used to take multiple input from user using variable.
             */

            const user = args.input;
            const lastid = UserList[UserList.length - 1].id;
            user.id = lastid + 1;
            UserList.push(user);
            // console.log(lastid);
            // console.log(user);
            return user;
        },
        updateUsername: (parent, args) => {
            const { id, newUsername } = args.input
            let userUpdate;
            UserList.forEach((user)=>{
                if(user.id === Number(id)){
                    user.username = newUsername;
                    userUpdate = user;
                }
            })
            return userUpdate;
        },
        deleteUser: (parent, args) => {
             const id = args.id;
             _.remove(UserList,(user)=> user.id === Number(id))
             return null;
        }
    }
};

module.exports = { resolvers }