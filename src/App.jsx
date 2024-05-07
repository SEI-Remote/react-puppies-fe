// npm modules
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// pages
import Landing from './pages/Landing/Landing'
import PuppyList from './pages/PuppyList/PuppyList'
import NewPuppy from './pages/NewPuppy/NewPuppy'

// components
import Nav from './components/Nav/Nav'

// styling
import './App.css'

// services
import * as puppyService from './services/puppyService'


function App() {
  const navigate = useNavigate()
  const [puppies, setPuppies] = useState([])

  useEffect(() => {
    const fetchPuppies = async () => {
      const puppiesData = await puppyService.index()
      setPuppies(puppiesData)
    }
    fetchPuppies()
  }, [])

  const handleAddPuppy = async formData => {
    const newPuppy = await puppyService.create(formData)
    setPuppies([newPuppy, ...puppies])
    navigate('/puppies')
  }

  const handleRemovePuppy = async puppyId => {
    const removedPuppy = await puppyService.delete(puppyId)
    setPuppies(puppies.filter(p => p._id !== removedPuppy._id))
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route 
          path='/puppies' 
          element={
            <PuppyList 
              handleRemovePuppy={handleRemovePuppy} 
              puppies={puppies} 
            />
          } 
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
