import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Courses from "./components/allcourses/Courses"
import Team from "./components/team/Team"
import Footer from "./components/common/footer/Footer"


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route  path='/courses' element={<Courses/>} />
          <Route  path='/team' element={<Team/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
