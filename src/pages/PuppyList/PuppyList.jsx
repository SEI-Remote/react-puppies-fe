// css
import './PuppyList.css'

const PuppyList = (props) => {
  return (
    <main className="list">
      <h1>PUPPY LIST</h1>

      {!props.puppies.length && <h2>Oops!  No puppies here!</h2>}

      <ul>
        {props.puppies.map(puppy => (
          <li key={puppy._id}>
            {puppy.name}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default PuppyList