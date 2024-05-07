import GreyPointy from '../../assets/icons/greyPointy.svg'
import GreyDrop from '../../assets/icons/greyDrop.svg'
import GreyButton from '../../assets/icons/greyButton.svg'
import BlackPointy from '../../assets/icons/blackPointy.svg'
import BlackDrop from '../../assets/icons/blackDrop.svg'
import BlackButton from '../../assets/icons/blackButton.svg'
import WhitePointy from '../../assets/icons/whitePointy.svg'
import WhiteDrop from '../../assets/icons/whiteDrop.svg'
import WhiteButton from '../../assets/icons/whiteButton.svg'
import BrownPointy from '../../assets/icons/brownPointy.svg'
import BrownDrop from '../../assets/icons/brownDrop.svg'
import BrownButton from '../../assets/icons/brownButton.svg'
import GoldenPointy from '../../assets/icons/goldenPointy.svg'
import GoldenDrop from '../../assets/icons/goldenDrop.svg'
import GoldenButton from '../../assets/icons/goldenButton.svg'

const iconTable = {
  GreyPointy,
  GreyDrop,
  GreyButton,
  BlackPointy,
  BlackDrop,
  BlackButton,
  WhitePointy,
  WhiteDrop,
  WhiteButton,
  BrownPointy,
  BrownDrop,
  BrownButton,
  GoldenPointy,
  GoldenDrop,
  GoldenButton,
}

const PuppyIcon = (props) => {
  const puppyAttributes = props.puppy.color + props.puppy.ears
  const puppyImg = iconTable[puppyAttributes]
  return (
    <img src={puppyImg} alt="A cute puppy" />
  )
}

export default PuppyIcon