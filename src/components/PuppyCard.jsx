import { Link } from "react-router-dom"

const PuppyCard = ({ puppy, handleRemovePuppy }) => {
  return ( 
    <li>
      <section>
        <button onClick={() => handleRemovePuppy(puppy._id)}>🗑️</button>
      </section>
      <h2>{puppy.name.toUpperCase()}</h2>
      <p>A {puppy.age}-year-old {puppy.breed}</p>
      <Link to='/puppies/edit' state={{puppy}}>
        <button>✏️</button>
      </Link>
    </li>
  )
}

export default PuppyCard