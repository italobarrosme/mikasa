import { ListCards } from '@/useComponents/ListCards'
import { useQuery } from '@apollo/client'
import { GET_GAMES, GetGamesQueryResponse } from '@/services/graphQl/querys'

export const ListGames = () => {
  const { data } = useQuery<GetGamesQueryResponse>(GET_GAMES)

  return (
    <>
      <section>
        <div className="flex justify-center items-center mb-4">
          <h1 className="title-font font-medium text-2xl bg-brand-accent text-brand-light mb-4 w-[140px]">Game List</h1>
        </div>

        <ListCards items={data?.games} linkRef="/games/" ></ListCards>
      </section>
    </>
  )
}