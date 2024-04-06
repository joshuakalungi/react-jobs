import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';

const App = () => {
  return (
    <>

      {/* <!-- navbar --> */}
      <Navbar/>

      {/* Hero Section */}
      <Hero/>

      <HomeCards/>

      <JobListings/>

    <div className='text-5xl'>App</div>
    </>
  )
}

export default App