import React, { useState } from 'react'
import MovieCreate from '../components/MovieCreate'
import MoviesSummary from '../components/MoviesSummary'
import NavBar from '../components/NavBar'

function Index() {

  const [refreshRequired,setRefreshrequired]=useState('')
  return (
    <div>
        
        <NavBar></NavBar>
        <MovieCreate setRefreshrequired={setRefreshrequired}></MovieCreate>
      <MoviesSummary refreshRequired={refreshRequired}></MoviesSummary>
      
    </div>
  )
}

export default Index
