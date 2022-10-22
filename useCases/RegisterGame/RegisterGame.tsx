import { useRegisterGameStore } from './store';
import { useUiStore } from '@/ui/store';
import { SideForm } from '@/components/SideForm';
import { FormEvent, FormHTMLAttributes, ChangeEvent } from 'react';
import clsx from 'clsx';
import { TextEditSelf } from '@/components/TextEditSelf';

export const RegisterGame = () => {
  const gameData = useRegisterGameStore(state => state.registerGameData);
  const setRegisterGame = useRegisterGameStore(state => state.setRegisterGame);
  const isSideForm = useUiStore(state => state.isSideForm);
  const setIsSideForm = useUiStore(state => state.setIsSideForm);
  const clearRegisterGame = useRegisterGameStore(state => state.clearRegisterGame);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setRegisterGame({
      ...gameData,
      [e.target.name]: e.target.value,
    });

  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    clearRegisterGame();

    console.log(gameData, 'OBJ DE ENVIO');

  }
  const CloseForm = () => {
    setIsSideForm(false);
  }

  return (
    <section>
      <button className="text-brand-light rounded-md shadow-md p-4 mx-auto bg-brand-secondary" onClick={(event) => setIsSideForm(!isSideForm)}>Go Insert Game</button>

      <SideForm title="Insert Game to Catalog" toggle={isSideForm ? 'isOpen' : 'isClosed'} emitEventClose={CloseForm}>
        <form onSubmit={onSubmit}>
          <div className="flex-col mt-10">
            <TextEditSelf defaultValue={gameData.finishedDate} name="orderFinished" label="What was the order of the finished game?" placeholder="Order Finished" onChange={handleChange} />
            <TextEditSelf defaultValue={gameData.title} name="title" label="What was the game's title?" placeholder="Title" onChange={handleChange} />
            <TextEditSelf defaultValue={gameData.description} name="description" label="What's this game about?" placeholder="Description" onChange={handleChange} />

          </div>

          <div className="flex mt-24">
            <button className="w-full px-6 py-2 leading-5 text-brand-light transition-colors duration-200 transform bg-brand-secondary rounded-md">Save</button>
          </div>
        </form>
      </SideForm>
    </section>
  );
}