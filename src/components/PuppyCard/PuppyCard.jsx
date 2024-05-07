// npm modules
import { NavLink } from "react-router-dom"

const PuppyCard = ({ puppy, handleRemovePuppy }) => {
  return (
    <li>
      <section>
        <button onClick={() => handleRemovePuppy(puppy._id)}>
          X
        </button>
        <NavLink 
          to={`/puppies/edit`}
          state={puppy}  
        >
          <button>
            ✏️
          </button>
        </NavLink>
      </section>
      <h2>{puppy.name.toUpperCase()}</h2>
      <p>A {puppy.age}-year old {puppy.breed}</p>
    </li>
  )
}

export default PuppyCard