import React from 'react'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />  
    </div>
  )
}

export default App
