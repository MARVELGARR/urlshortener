import { useState } from 'react'
import Layout from './component/Layout'
import Hero from './component/Hero'
import './App.css'

function App() {

  return (
    <>
    <Layout>
      <div className="-z-10">
        <Hero/>
      </div>
    </Layout>
  
    </>
  )
}

export default App
