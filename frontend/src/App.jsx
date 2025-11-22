import React from 'react'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Coding from './pages/Coding.jsx'
import RoboticsAI from './pages/RoboticsAI.jsx'
import VRARLab from './pages/VRARLab.jsx'
import Workshop from './pages/Workshop.jsx'
import Books from './pages/Books.jsx'
import OnlineCourses from './pages/OnlineCourses.jsx'
import PrePrimarySchool from './pages/PrePrimarySchool.jsx'

const App = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/robotics-ai" element={<RoboticsAI />} />
          <Route path="/vr-ar-lab" element={<VRARLab />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/books" element={<Books />} />
          <Route path="/online-courses" element={<OnlineCourses />} />
          <Route path="/pre-primary-school" element={<PrePrimarySchool />} />
        </Routes>
      </main>
      <Footer />  
    </div>
  )
}

export default App