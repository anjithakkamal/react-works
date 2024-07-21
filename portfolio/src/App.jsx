import Nav from "./Nav"
import Banner from "./Banner"
import Footer from "./Footer"
import Skills from "./Skills"
import Header from "./Header/Header"
import Profile from "./Profile/Profile"
import Projects from "./Projects"
import Education from "./Education"

function App() {
  const qulifications=[
    {"name":"MCA","university":"MG","grade":"o"},
    {"name":"BCA","university":"MG","grade":"o"},
    {"name":"BBA","university":"MG","grade":"o"},
    {"name":"MCA","university":"MG","grade":"o"},
    {"name":"BCA","university":"MG","grade":"o"},
    {"name":"BBA","university":"MG","grade":"o"},
]

const ProfileTitle="backend developer" 

  return (

    <div>
      <Nav></Nav>
      <Header></Header>
      <Profile ProfileTitle={ProfileTitle}></Profile>
      <Banner></Banner>
      <Projects></Projects>
      <Skills></Skills>
      <Education qulifications={qulifications}></Education>
      <Footer></Footer>
      
    </div>
  )
}
export default App