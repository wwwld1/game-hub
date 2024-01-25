import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Props {
  gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
  // Games
  // Action Games
  // Xbox Games
  // Xbox Action Games
  const { platform, genre } = gameQuery
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
  return (
    <Heading
      as='h1'
      marginY={5}
      fontSize='5xl'
    >
      {heading}
    </Heading>
  )
}

export default GameHeading
