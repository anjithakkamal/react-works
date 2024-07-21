import React from 'react'
import Aboutme from './Aboutme'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import Projects from './Projects'
import Qualification from './Qualification'
import Service from './Service'
import Skills from './Skills'

function App() {
  const user={
    "name":"Anjitha K Kamal",
  "degree":"MCA","phone":"9947374509",
  "dob":"09-08-1999",
  "experience":"1yr",
  "email":"anjithakkamal@gmail.com"
}

  const skillsets=[
    {"name":"python","percentage":"90%"},
    {"name":"HTML","percentage":"95%"},
  {"name":"css","percentage":"91%"},
  {"name":"javascript","percentage":"85%"}]
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Aboutme user={user}></Aboutme>
      <Skills skillsets={skillsets}></Skills>
      <Qualification></Qualification>
      <Service></Service>
      <Projects></Projects>
      <Footer></Footer>
     
    </div>
  )
}

export default App
