import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'

const App = () => {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
    <div className='text-5xl'>App</div>
    </>
  )
}

export default App