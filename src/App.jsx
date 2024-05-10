import React from 'react'
import NavBar from './components/navbar/NavBar'
import Hero from './components/Hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import MyWork from './components/mywork/MyWork'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App