import React, { useState } from 'react'
import { movieCreateApi } from '../services/api';

function MovieCreate({setRefreshrequired}) {
  // title,director,year,language,runtime,poster
  const [movie, setMovie] = useState({ title: '', year: '', director: '', runtime: '', language: '', poster: '' })

  async function handleSubmit(event){

    event.preventDefault()

    // console.log(movie);

    let res=await movieCreateApi(movie)

    console.log(res);

    setRefreshrequired("reload")

  }
  return (
    <div>

      <div className="container mb-4">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 border border-3 rounded shadow p-4">
            <h3 className='text-center my-2'>Add New  Movie </h3>
            <form action="" onSubmit={handleSubmit}>
              <div className="mb-3 d-flex gap-1">
                <div className='w-50'>
                  <label htmlFor="">Title</label>
                  <input
                    type="text"
                    className='form-control'
                    onChange={(e) => setMovie({ ...movie, title: e.target.value })}
                  />
                </div>

                <div className='w-50'>
                  <label htmlFor="">director</label>
                  <input
                    type="text"
                    className='form-control'
                    onChange={(e) => setMovie({ ...movie, director: e.target.value })}
                  />
                </div>
              </div>
              <div className="mb-3 d-flex gap-1">
                <div className='w-50'>
                  <label htmlFor="">year</label>
                  <input
                    type="text"
                    className='form-control'
                    onChange={(e) => setMovie({ ...movie, year: e.target.value })}
                  />
                </div>

                <div className='w-50'>
                  <label htmlFor="">Language</label>
                  <input
                    type="text"
                    className='form-control'
                    onChange={(e) => setMovie({ ...movie, language: e.target.value })}
                  />
                </div>
              </div>
              <div className="mb-3  d-flex gap-1">
                <div className='w-50'>
                  <label htmlFor="">runtime</label>
                  <input
                    type="text"
                    className='form-control'
                    onChange={(e) => setMovie({ ...movie, runtime: e.target.value })}
                  />
                </div>

                <div className='w-50'>
                  <label htmlFor="">poster</label>
                  <input
                    type="file"
                    accept='image/*'
                    className='form-control'
                    onChange={(e) => setMovie({ ...movie, poster: e.target.files[0] })}
                  />
                </div>
              </div>
              <div className="mb-3">
                <button type='submit'>Add</button>
              </div>
            </form>
          </div>
          <div className="col-2"></div>
        </div>
      </div>


    </div>
  )
}

export default MovieCreate
