// npm modules
import { NavLink } from "react-router-dom"

// components
import PuppyIcon from "../PuppyIcon/PuppyIcon"

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
      <PuppyIcon puppy={puppy} />
      <h2>{puppy.name.toUpperCase()}</h2>
      <p>A {puppy.age}-year old {puppy.breed}</p>
    </li>
  )
}

export default PuppyCard