import React from 'react'
import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Client from '@/components/Client'
import Servies from '@/components/ServicesDemo'

const Home = () => {
  return (
    <div >
      <Navbar/>
      <Header/>
      <Client/>
      <Servies/>
    </div>
  )
}

export default Home;

