import PuppyLogo from '../../assets/animations/puppy-logo.riv'
import { useRive } from '@rive-app/react-canvas'

const Landing = () => {
  // Rive
  const { RiveComponent } = useRive({
    src: PuppyLogo,
    autoplay: true,
    stateMachines: "State Machine 1",
  })

  return (
    <main>
      <RiveComponent />
      <h1>REACT PUPPIES</h1>
    </main>
  )
}

export default Landing