import React, { useState } from 'react'
import { useEffect } from 'react'
import Cards from './cards';


const ApiUrl = 'http://www.omdbapi.com/?apikey=782dd5b6';


const Movie = () => {
    const [movies, setMovie] = useState([])
    const [movieSearch, setMovieSearch] = useState("")
    
    const searchMovie =async(title)=>{
        const response = await fetch(`${ApiUrl}&s=${title}`);
        const data = await response.json();
       setMovie(data.Search)
       console.log(data)
    }
    useEffect(()=>{
        searchMovie('One piece')
    },[])

  return (
<>

<div className='p-4 flex justify-center items-center flex-col'>
    <h1 className='text-5xl'>MovieApp</h1>
    <div id="search-bar" className=" rounded-md">
    <div className="flex items-center justify-center m-6">
        <input type="text" placeholder="Search any movie"
            className="w-full rounded-md px-4 py-2 border border-sky-500"
            value={movieSearch} onChange={(e)=>setMovieSearch(e.target.value)}/>
        <button
            className="bg-red-950 text-white rounded-md px-4 py-2 ml-2 hover:bg-red-700 transition ease-out duration-150 "
            onClick={()=>searchMovie(movieSearch)}>
            Search
        </button>
    </div>
</div>
    {movies?.length > 0 ? (
          <div className="flex gap-8 flex-wrap justify-center py-10">
            {movies.map((movie,index) => (
              <Cards key={index} movie={movie} />

            ))}
          </div>
        ) : (
          <div className="w-full mt-12 flex justify-center items-center">
            <h2>No Movies Found</h2>
          </div>
        )}
</div>
</>
  )
}

export default Movie