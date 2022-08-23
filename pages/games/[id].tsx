import type { GetStaticPaths, GetStaticProps } from 'next'
import styles from './../../styles/Games.module.scss'
import { GET_GAME } from '../../graphQl/querys'
import { client } from '../../graphQl/apollo'
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context: any) => {

  const { id } = context.params;
  const { data } = await client.query({
    query: GET_GAME,
    variables: {
      id: id
    }
  })

  return {
    props: {
      game: data?.game || { name: 'Not Found Game', background_image: 'https://via.placeholder.com/300x200' },
    },
    revalidate: 30
  }
}
const Details = ({ game }: any) => {
  let dataFormatada = new Date(game.finished).toLocaleDateString('pt-BR');

  const [stars, setStar] = useState([0]);

  useEffect(() => {
    if (game.rating) {
      setStar(Array.from({ length: game.rating }, (_, i) => i + 1))
    }
  }, [game.rating])

  return (
    <section className={styles.main__details}>
      <div className="mx-auto">
        <div className="mx-auto flex flex-wrap">
          <img alt="ecommerce" className="w-[320px] h-[320px]" src={game.image.url} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Finished Date {dataFormatada}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{game.title}</h1>
            <div className="flex mb-4">
              <span className="text-gray-600 ml-3 flex items-center gap-1">{stars.map((item) => (
                <Icon key={item} icon={'ant-design:star-filled'} />
              ))} Rating</span>
            </div>
            <p className="leading-relaxed">{game.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex ml-6 items-center">
                <div className="relative">
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">{game.orderFinished}º Finished</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
