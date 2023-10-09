// npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

// css
import './EditPuppy.css'

const EditPuppy = (props) => {
  // huh? Come back to this...
  const location = useLocation()
  const [form, setForm] = useState(location.state.puppy)

  console.log(location)

  const handleChange = (evt) => {
    setForm({...form, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleUpdatePuppy(form)
  }

  return (
    <main className="new">
      <h1>EDIT PUPPY</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="name-input">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          placeholder="Name"
          value={form.name}
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
          value={form.age}
          onChange={handleChange}
        />

        <label htmlFor="breed-input">Breed</label>
        <input
          required
          type="text"
          name="breed"
          id="breed-input"
          placeholder="Breed"
          value={form.breed}
          onChange={handleChange}
        />

        <label htmlFor="color-input">Color</label>
        <select onChange={handleChange} value={form.color} required name="color" id="color-input">
          <option value="Grey">Grey</option>
          <option value="Black">Black</option>
          <option value="Brown">Brown</option>
          <option value="White">White</option>
          <option value="Golden">Golden</option>
        </select>

        <label htmlFor="ears-input">Ears</label>
        <select onChange={handleChange} value={form.ears} required name="ears" id="ears-input">
          <option value="Drop">Drop</option>
          <option value="Pointy">Pointy</option>
          <option value="Button">Button</option>
        </select>

        <button type="submit">SAVE CHANGES</button>
      </form>
    </main>
  )
}

export default EditPuppy