import React, { useEffect, useState } from 'react'
import { movieListApi } from '../services/api'

function MoviesSummary(refreshRequired) {

    const [movies, setMovies] = useState()

    async function fetchMovies() {

        let res = await movieListApi()

        if (res.status > 199 && res.status < 300) {

            setMovies(res.data)

            // console.log(res.data);
        }

        else {

            console.log("failed to fetch data from resource");
        }

        console.log(res);
    }

    useEffect(() => {

        fetchMovies()

    }, [refreshRequired])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <table className='table'>
                            
                            <tr>
                                <th>Title</th>
                                <th>Year</th>
                                <th>Director</th>
                                <th>Runtime</th>
                                <th>language</th>
                                <th>Image</th>
                            </tr>
                            <tbody>
                                {movies && movies.map((m,i)=>(
                                    <tr>
                                        <td>{m.title}</td>
                                        <td>{m.director}</td>
                                        <td>{m.runtime}</td>
                                        <td>{m.year}</td>
                                        <td>{m.language}</td>
                                        <td><img style={{width:"70%",height:"200px"}} src={m.poster} alt="" /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-2"></div>
                </div>

            </div>
        </div>
    )
}

export default MoviesSummary
