const UserList = [
    {
        id: 1,
        name: "John",
        username: "john",
        age: 34,
        nationality: "Canadian",
        friends: [
            {
                id: 5,
                name: "John2",
                username: "john2",
                age: 36,
                nationality: "Canadian"
            },
            {
                id: 6,
                name: "mohan",
                username: "mohhhan",
                age: 34,
                nationality: "Indian"
            }
        ]
    },
    {
        id: 2,
        name: "John2",
        username: "john2",
        age: 36,
        nationality: "Canadian"
    },
    {
        id: 3,
        name: "mohan",
        username: "mohhhan",
        age: 34,
        nationality: "Indian",
        friends: [
            {
                id: 7,
                name: "John2",
                username: "john2",
                age: 36,
                nationality: "Canadian"
            },
            {
                id: 8,
                name: "mohan",
                username: "mohhhan",
                age: 34,
                nationality: "Indian"
            }
        ]
    },
    {
        id: 4,
        name: "Parth",
        username: "mkwparth",
        age: 21,
        nationality: "Indian"
    }
]

const movieList = [
    {
        id: 1,
        name: "Interstellar",
        yearOfPublication: 2007,
        islnTheaters: false,
    },
    {
        id: 2,
        name: "avengers endgame",
        yearOfPublication: 2019,
        islnTheaters: true,
    },
    {
        id: 3,
        name: "Interstellar2",
        yearOfPublication: 2007,
        islnTheaters: true,
    },
    {
        id: 4,
        name: "harry potter",
        yearOfPublication: 2002,
        islnTheaters: true,
    },
    {
        id: 5,
        name: "parthXboy",
        yearOfPublication: null,
        islnTheaters: true,
    },

]
module.exports = { UserList ,movieList};