import React from 'react'
import Header from './Header'
import Footer from './Footer'
function Layout({children}) {
  return (
    <>
      <div className="sticky top-0 z-10 bg-white">

        <Header/>
      </div>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
