import type { GetStaticPaths, GetStaticProps } from 'next'

import { GET_GAME } from '../../services/graphQl/querys'
import { client } from '../../services/graphQl/apollo'
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
    <section>
      <div className="container mx-auto">
        <div className="mx-auto flex flex-wrap">
          <img alt="ecommerce" className="w-[400px] h-[310px] rounded-md" src={game.image.url} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <div className="flex">
              <span className="title-font font-medium text-2xl bg-brand-dark text-brand-light mb-4">{game.orderFinished}º Finished</span>
            </div>
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Finished Date {dataFormatada}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{game.title}</h1>
            <div className="flex mb-4">
              <span className="text-brand-secondary mt-2 flex items-center gap-1">{stars.map((item) => (
                <Icon key={item} icon={'akar-icons:star'} />
              ))}</span>
            </div>
            <p className="leading-relaxed">{game.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
