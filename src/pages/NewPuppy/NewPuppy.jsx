// npm modules
import { useState } from "react"

// css
import './NewPuppy.css'

const NewPuppy = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    breed: 'Mixed',
    age: 0,
    color: 'Grey',
    ears: 'Button'
  })

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddPuppy(formData)
  }

  return (
    <main className="new">
      <h1>NEW PUPPY</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="age-input">Age</label>
        <input
          required
          min="0"
          type="number"
          name="age"
          id="age-input"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />

        <label htmlFor="breed-input">Breed</label>
        <input
          required
          type="text"
          name="breed"
          id="breed-input"
          placeholder="Breed"
          value={formData.breed}
          onChange={handleChange}
        />

        <label htmlFor="color-input">Color</label>
        <select 
          required 
          name="color" 
          id="color-input"
          value={formData.color}
          onChange={handleChange}  
        >
          <option value="Grey">Grey</option>
          <option value="Black">Black</option>
          <option value="Brown">Brown</option>
          <option value="White">White</option>
          <option value="Golden">Golden</option>
        </select>

        <label htmlFor="ears-input">Ears</label>
        <select 
          required 
          name="ears" 
          id="ears-input"
          value={formData.ears}
          onChange={handleChange}  
        >
          <option value="Drop">Drop</option>
          <option value="Pointy">Pointy</option>
          <option value="Button">Button</option>
        </select>

        <button type="submit">SUBMIT</button>

      </form>
    </main>
  )
}

export default NewPuppy