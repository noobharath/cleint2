import React, { Children } from 'react'
import Footer from '../Components/Footer'
import Navigation from '../Components/Nav'

export default function Layout({children}) {
  return (
    <div>
        <main>
            <Navigation/>
            {children}
            <Footer/>
        </main>
    </div>
  )
}