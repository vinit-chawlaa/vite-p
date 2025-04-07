import React from 'react'
import { Routes , Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'


const App = () => {
  return (
    <div>
      <Link to='/'>home</Link> <br />
      <Link to='/about'>about</Link>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
    </div>
  )
}

export default App