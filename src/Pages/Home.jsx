import React from 'react'
import Main from './Main'
import Aboute from '../Components/Aboute'
import AbouteBG from '../Components/AbouteBG'
import Services from '../Components/Services'
import TypeOfService from '../Components/TypeOfService'
import Assurance from '../Components/Assurance'
import Faq from '../Components/Faq'
import Registor from '../Components/Registor'

export default function Home() {
  return (
    <>
      <Main/>
      <Aboute/>
      <AbouteBG/>
      <Services/>
      <TypeOfService/>
      <Assurance/>
      <Faq/>
      <Registor/>
    </>
  )
}
