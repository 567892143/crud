// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-3xl font-bold animate-bounce'>USER DATA</h1>
      <div className='flex flex-row ' >
       <Link to='/create' > <button className='bg-blue-500 text-white px-4 py-2 mr-2 rounded-md border border-blue-600 hover:bg-blue-600'>Create</button> </Link>
        <Link to='/read' ><button className='bg-blue-500 text-white px-4 py-2 mr-2 rounded-md border border-blue-600 hover:bg-blue-600'>Read</button></Link> 
       <Link to='/update'> <button className='bg-blue-500 text-white px-4 py-2 mr-2 rounded-md border border-blue-600 hover:bg-blue-600'>Update</button></Link> 
       <Link to='/delete'><button className='bg-blue-500 text-white px-4 py-2 rounded-md border border-blue-600 hover:bg-blue-600'>Delete</button></Link> 
      </div>
    </div>
  );
}

export default Home;
