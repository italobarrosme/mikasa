import type { GetStaticPaths } from 'next'
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}


export const getStaticProps = async (context: any) => {
  const { name } = context.params

  const response = await fetch(`https://api.rawg.io/api/games?key=69002ae81c6b49eab730ac819760dcc5&search=${name}&search_exact=true`)


  const data = await response.json().catch(err => console.log(err))

  return {
    props: {
      game: data.results[0] || {name: 'Not Found Game', background_image: 'https://via.placeholder.com/300x200'},
      data: new Date().toISOString()
    },
    revalidate: 30
  }
}
const Details = ({game, data}:any) => {

  console.log(game, 'GAME')

  return (
    <>
      <h1>Details</h1>
      <p>{ game.name }</p>

      <img src={game.background_image} alt={game.name} />

      <p>{ game.rating }</p>
      <p>{ data }</p>

    </>
  );
}

export default Details;