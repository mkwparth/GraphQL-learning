import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
const QUERY_ALL_USER = gql`
    {
        users {
            id
            age
            name
            username
            nationality
        }
    }`

const GET_MOVIE_BY_NAME = gql`
    query Movie($name:String!){
        movie(name:$name){
            name
            yearOfPublication
            id
        }
    }
`

const CREATE_USER = gql`
    mutation createUser($input:CreateUserInput!){
        createUser(input:$input){
            name
            id
        }
    }
`

const DisplayData = () => {
    const [movieSearched, setMovieSearched] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [age, setAge] = useState(0);
    const [nationality, setNationality] = useState("");


    const { data, loading, error,refetch } = useQuery(QUERY_ALL_USER);

    const [fetchMovie, { data: movieData, error: movieError }] = useLazyQuery(GET_MOVIE_BY_NAME)
    // for mutating the data
    const [createUser] = useMutation(CREATE_USER)
    if (loading) {
        return <h1>Mother fucker it's loading</h1>
    }
    if (data) {
        // console.log(data);
    }
    if (error) {
        console.log(error);
    }
    if (movieData === null) {
        console.log(movieData + "fuck you");
    }
    if (movieError) {
        console.log(movieError)
    }

    return (
        <div>
            <div>
                <input type="text" placeholder='Name...' onChange={(e) => {
                    setName(e.target.value)
                }} />
                <input type="text" placeholder='Username...' onChange={(e) => {
                    setUsername(e.target.value)
                }} />
                <input type="text" placeholder='Age...' onChange={(e) => {
                    setAge(e.target.value)
                }} />
                <input type="text" placeholder='Nationality...' onChange={(e) => {
                    setNationality(e.target.value)
                }} />
                <button onClick={()=>{
                    createUser({
                        variables:{
                            input:{
                                name,username,age:Number(age),nationality
                            }
                        }
                    })
                    refetch();
                }}>Create User</button>
            </div>

            {data.users && data.users.map((user) => {
                return (
                    <div>
                        <h6>ID:{user.id}</h6>
                        <h6>Name:{user.name}</h6>
                        <h6>Username:{user.username}</h6>
                        <h6>Age:{user.age}</h6>
                        <hr />
                    </div>
                )
            })}

            <div>
                <input type="text" placeholder='Intersteller...' onChange={(e) => {
                    setMovieSearched(e.target.value)
                }} />

                <button onClick={() => {
                    fetchMovie({
                        variables: {
                            name: movieSearched
                        }
                    });
                }}>Fetch data</button>
                <div>
                    {
                        movieData && (
                            <div>
                                <h1>Movie Name:{movieData.movie.name ? movieData.movie.name : "you are not allowd"}</h1>
                                <h1>Year of publication:{movieData.movie.yearOfPublication ? movieData.movie.yearOfPublication : "Not yet release"}</h1>
                                <h1>ID: {movieData.movie.id}</h1>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>


    )
}

export default DisplayData
