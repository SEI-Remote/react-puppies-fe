// npm modules
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// pages
import Landing from './pages/Landing/Landing'
import PuppyList from './pages/PuppyList/PuppyList'
import NewPuppy from './pages/NewPuppy/NewPuppy'

// components
import Nav from './components/Nav/Nav'

// css
import './App.css'

// services
import * as puppyService from './services/puppyService'

function App() {
  const [puppies, setPuppies] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPuppies = async () => {
      const puppiesData = await puppyService.index()
      setPuppies(puppiesData)
    }
    fetchPuppies()
  }, [])

  const handleAddPuppy = async formData => {
    //// call API with formData
    const newPuppy = await puppyService.create(formData)
    //// set state with newPuppy returned from API
    setPuppies([newPuppy, ...puppies])
    //// navigate to PuppyList
    navigate('/puppies')
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route 
          path='/puppies' 
          element={<PuppyList puppies={puppies} />} 
        />
        <Route 
          path='/puppies/new' 
          element={<NewPuppy handleAddPuppy={handleAddPuppy} />}
        />
      </Routes>
    </>
  )
}

export default App
