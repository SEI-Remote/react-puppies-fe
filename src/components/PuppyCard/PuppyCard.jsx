const PuppyCard = ({ puppy }) => {
  return (
    <li>
      <section>
        <button>
          X
        </button>
      </section>
      <h2>{puppy.name.toUpperCase()}</h2>
      <p>A {puppy.age}-year old {puppy.breed}</p>
    </li>
  )
}

export default PuppyCard