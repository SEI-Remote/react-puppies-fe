// npm modules
import { Route, Routes, useNavigate } from 'react-router-dom'

// pages
import Landing from './pages/Landing/Landing'
import PuppyList from './pages/PuppyList/PuppyList'

// components
import Nav from './components/Nav/Nav'

// css
import './App.css'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/puppies' element={<PuppyList />} />
      </Routes>
    </>
  )
}

export default App
