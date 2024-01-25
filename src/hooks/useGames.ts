import { GameQuery } from '../App'
import useData from './useData'
import { Genre } from './useGenres'

export interface Platform {
  id: number
  name: string
  slug: string
}

export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
}

const useGames = (gameQuery: GameQuery) => {
  const { genre, platform, sortOrder, searchText } = gameQuery
  return useData<Game>(
    '/games',
    {
      params: {
        genres: genre?.id,
        platforms: platform?.id,
        ordering: sortOrder,
        search: searchText,
      },
    },
    [gameQuery]
  )
}

export default useGames
