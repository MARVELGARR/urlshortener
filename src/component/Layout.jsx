import React from 'react'
import Header from './Header'
import Footer from './Footer'
function Layout({children}) {
  return (
    <>
      <div className="h-15">

        <Header/>
      </div>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
