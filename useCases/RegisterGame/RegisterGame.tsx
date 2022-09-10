import { useRegisterGameStore } from './store';
import { useUiStore } from '@/ui/store';
import { SideForm } from '@/components/SideForm';
import { FormEvent } from 'react';
import clsx from 'clsx';
import { TextEditSelf } from '@/components/TextEditSelf';

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
  const CloseForm = () => {
    setIsSideForm(false);

  }
  return (
    <section className="max-w-4xl p-4 mx-auto rounded-md shadow-md bg-brand-soft max-h-96">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Game Data</h2>


      <button onClick={(event) => setIsSideForm(!isSideForm)}>Go Insert Game</button>
      <SideForm title="Insert Game to Catalog" toggle={isSideForm ? 'isOpen' : 'isClosed'} emitEventClose={CloseForm}>
        <form onSubmit={onSubmit}>
          <div className="flex-col mt-10">
            <TextEditSelf label="What was the order of the finished game?" placeholder="Order Finished" />
            <TextEditSelf label="What was the game's title?" placeholder="Title" />
            <TextEditSelf label="What's this game about?" placeholder="Description" />

          </div>

          <div className="flex mt-24">
            <button className="w-full px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
          </div>
        </form>
      </SideForm>
    </section>
  );
}