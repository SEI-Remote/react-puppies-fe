// components
import PuppyCard from '../../components/PuppyCard/PuppyCard'

// css
import './PuppyList.css'

const PuppyList = (props) => {
  return (
    <main className="list">
      <h1>PUPPY LIST</h1>

      {!props.puppies.length && <h2>Oops! No puppies here!</h2>}

      <ul>
        {props.puppies.map(puppy =>
          <PuppyCard key={puppy._id} puppy={puppy} />
        )}
      </ul>
    </main>
  )
}

export default PuppyList