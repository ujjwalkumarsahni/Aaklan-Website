import React from 'react'
import Hero from '../components/Hero.jsx'
import StatsSection from '../components/StatsSection.jsx'
import Curriculum from '../components/Curriculum.jsx'
import FullServices from '../components/FullServices.jsx'
import DedicatedStaffing from '../components/DedicatedStaffing.jsx'
import AiRoboticsSection from '../components/AiRoboticsSection.jsx'
import KitsSection from '../components/KitsSection.jsx'
import CodingAi from '../components/CodingAi.jsx'
import StructuredCurriculum from '../components/StructuredCurriculum.jsx'
import AAKLANSchool from '../components/AAKLANSchool.jsx'
import ImpactSection from '../components/ImpactSection.jsx'
import VRFeatures from '../components/VRFeatures.jsx'
import VrFeatureSection from '../components/VrFeatureSection.jsx'
import CodingQuiz from '../components/CodingQuiz.jsx'
import WebDevKey from '../components/WebDevelopKeySkills.jsx'
import BenefitsofJoining from '../components/BenefitsofJoining.jsx'
import FutureSkills from '../components/FutureSkills.jsx'
import OurBelivers from '../components/OurBelivers.jsx'

const Home = () => {
  return (
    <div>
        <Hero /> 
        <StatsSection />
        <Curriculum />
        <FullServices />
        <DedicatedStaffing />
        <AiRoboticsSection />
        <KitsSection />
        <CodingAi />
        <StructuredCurriculum />
        <AAKLANSchool />
        <ImpactSection />
        <VRFeatures />
        <VrFeatureSection />
        <CodingQuiz />
        <WebDevKey />
        <BenefitsofJoining />
        <FutureSkills />
        <OurBelivers />
    </div>
  )
}

export default Home