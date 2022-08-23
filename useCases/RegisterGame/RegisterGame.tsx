import { useRegisterGameStore } from './store';
import { useUiStore } from '@/ui/store';
import { SideForm } from '@/components/SideForm';
import { FormEvent } from 'react';

export const RegisterGame = () => {
  const sendData = useRegisterGameStore(state => state.registerGameData);
  const setRegisterGame = useRegisterGameStore(state => state.setRegisterGame);
  const isSideForm = useUiStore(state => state.isSideForm);
  const setIsSideForm = useUiStore(state => state.setIsSideForm);


  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const registerGameData = {
    //   orderFinished: (e.target as HTMLFormElement).orderFinished.value,
    //   title: (e.target as any).title.value,
    //   description: (e.target as HTMLFormElement).description.value,
    //   finishedDate: (e.target as HTMLFormElement).finishedDate.value,
    //   image: {
    //     url: (e.target as HTMLFormElement).image.value,
    //   },
    //   rating: (e.target as HTMLFormElement).rating.value,
    // };


    // setRegisterGame({ ...registerGameData });

    // console.log(registerGameData, 'state');
    console.log(sendData, 'sobr');



  }

  return (
    <section className="max-w-4xl p-4 mx-auto rounded-md shadow-md bg-brand-soft max-h-96">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Game Data</h2>

      <form onSubmit={onSubmit}>
        <button onClick={(event) => setIsSideForm(!isSideForm)}>CLIKA AQUI</button>
        {isSideForm && <SideForm />}
      </form>
    </section>
  );
}