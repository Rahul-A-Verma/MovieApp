import React from 'react'



const Cards = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className='w-72 h-fit bg-slate-100 rounded-lg  
         transform transition duration-500 p-3
        hover:scale-105 hover:shadow-2xl'>
        <img className='w-full h-48 object-cover rounded-t-lg' src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
       
       <div className='p-4'>
        <h4 className=''>{Type}</h4>
        <h2 className='font-medium'> {Title}</h2>
        <p className='font-light text-sm'>{Year}</p>
        <div className='flex justify-end items-center'>
           <a href={`https://www.imdb.com/title/${imdbID}/`}><button 
           className='bg-red-950 px-2 py-1 rounded-md text-white hover:bg-red-700 transition ease-in duration-150'
           >ReadMore</button></a>
        </div>
       
        </div> 

    </div>

  )
}

export default Cards