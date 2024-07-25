import React, { useState } from 'react'
import MovieCreate from '../components/MovieCreate'
import MoviesSummary from '../components/MoviesSummary'
import NavBar from '../components/NavBar'

function Index() {

  const [refreshRequired, setRefreshrequired] = useState()

  const [movieId, setMovieId] = useState()


  return (
    <div>

      <NavBar></NavBar>
      <MovieCreate setRefreshrequired={setRefreshrequired} movieId={movieId}></MovieCreate>
      <MoviesSummary refreshRequired={refreshRequired} setMovieId={setMovieId}></MoviesSummary>

    </div>
  )
}

export default Index
