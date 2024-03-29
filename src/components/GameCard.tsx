import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  const { background_image, parent_platforms, metacritic, name, rating_top } = game
  return (
    <Card>
      <Image src={getCroppedImageUrl(background_image)} />
      <CardBody>
        <HStack
          justifyContent='space-between'
          marginBottom={3}
        >
          <PlatformIconList platforms={parent_platforms.map((p) => p.platform)} />
          <CriticScore score={metacritic} />
        </HStack>
        <Heading fontSize='2xl'>
          {name}
          <Emoji rating={rating_top} />
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
