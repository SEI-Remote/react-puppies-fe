// npm modules
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Landing from './pages/Landing/Landing'

// components
import Nav from './components/Nav/Nav'

// styling
import './App.css'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/puppies' element={ <h1>PUPPY LIST</h1> } />
      </Routes>
    </>
  )
}

export default App
