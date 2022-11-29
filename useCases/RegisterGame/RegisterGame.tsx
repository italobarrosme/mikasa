import { FormEvent, ChangeEvent, useState } from 'react';

import { useRegisterGameStore } from './store';
import { useUiStore } from '@/ui/store';
import { SideForm } from '@/useComponents/SideForm';
import { TextEditSelf } from '@/usePieces/TextEditSelf';
import { TextAreaEditSelf } from '@/usePieces/TextAreaEditSelf';
import { AttachmentsEditSelf } from '@/usePieces/AttachmentsEditSelf';
import { SlideStars } from '@/usePieces/SlideStars';

export const RegisterGame = () => {
  const gameData = useRegisterGameStore(state => state.registerGameData);
  const setRegisterGame = useRegisterGameStore(state => state.setRegisterGame);
  const isSideForm = useUiStore(state => state.isSideForm);
  const setIsSideForm = useUiStore(state => state.setIsSideForm);
  const clearRegisterGame = useRegisterGameStore(state => state.clearRegisterGame);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setRegisterGame({
      ...gameData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();

    setRegisterGame({
      ...gameData,
      [e.target.name]: e.target.value,
    });
  };

  const handlerChangeAttachment = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files[0]);

      setRegisterGame({
        ...gameData,
        image: {
          url: e.target.files[0],
        }
      });
    }



  };

  const handlerStarsRating = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setRegisterGame({
      ...gameData,
      rating: Number(e.target.value),
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
            <TextEditSelf defaultValue={gameData.finishedDate} type="number" name="orderFinished" label="What was the order of the finished game?" placeholder="Order Finished" onChange={handleChangeInput} />
            <TextEditSelf defaultValue={gameData.title} name="title" label="What was the game's title?" placeholder="Title" onChange={handleChangeInput} />
            <TextAreaEditSelf value={gameData.description} name="description" label="What's this game about?" placeholder="Description" onChange={handleChangeTextArea} />
            <AttachmentsEditSelf name="attachments" label="Add some images" placeholder="Attachments here" fileData={gameData.image.url} onChange={handlerChangeAttachment} />
            <SlideStars defaultValue={gameData.rating} label="How many stars does this game deserve?" onChange={handlerStarsRating} />
          </div>

          <div className="flex mt-24">
            <button className="w-full px-6 py-2 leading-5 text-brand-light transition-colors duration-200 transform bg-brand-secondary rounded-md">Save</button>
          </div>
        </form>
      </SideForm>
    </section>
  );
}