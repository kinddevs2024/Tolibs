import React from 'react'
import Resume from '../Resume'
import Hero from '../Hero'
import Global from '../Global'
import Kurslarimiz from './kurslarimiz/Kurslarimiz'
import Savollar from './savollar/Savollar'
import { Analytics } from "@vercel/analytics/react"

const Home = () => {
  return (
    <main className='font-exo'>
      <Analytics />
      <Hero/>
      <Resume />
      <Global />
      {/* <Kursi /> */}
      <Kurslarimiz />
      <Savollar />
      {/* <Map /> */}
    </main>
  )
}

export default Home;
