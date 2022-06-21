import type { GetStaticPaths } from 'next'
import styles from './../../styles/Games.module.scss'
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
 
  let dataFormatada = new Date(data).toLocaleDateString('pt-BR');

  return (
    <>
        <main className={styles.main__details}>
        <div className={styles.left__content}>
          <img src={game.background_image} alt={game.name} />
          <h2>{game.name}</h2>

          <p> {dataFormatada} </p>

          <p>{ game.rating }</p>

        </div>
        <div className={styles.right__content}>
          <h2>Description</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat iure sint maxime facilis adipisci impedit dolorem odio 
            temporibus, sunt commodi veritatis dicta, dignissimos minima possimus cupiditate dolor aperiam velit molestiae!</p>
        </div>
      </main>

    </>
  );
}

export default Details;