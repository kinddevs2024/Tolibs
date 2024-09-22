import React from 'react'
import Resume from '../Resume'
import Hero from '../Hero'
import Global from '../Global'
import Kursi from '../Kursi/Kursi'

const Home = () => {
  return (
    <main className='font-exo'>
      <Hero />
      <Resume />
      <Global />
      <Kursi />
    </main>
  )
}

export default Home