import { useRegisterGameStore } from './store';
import { useUiStore } from '@/ui/store';
import { SideForm } from '@/components/SideForm';
import { FormEvent } from 'react';
import clsx from 'clsx';

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
    console.log('HERE')
    setIsSideForm(false);

  }
  return (
    <section className="max-w-4xl p-4 mx-auto rounded-md shadow-md bg-brand-soft max-h-96">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Game Data</h2>


      <button onClick={(event) => setIsSideForm(!isSideForm)}>Go Insert Game</button>
      <SideForm title="Insert Game to Catalog" toggle={isSideForm ? 'isOpen' : 'isClosed'} emitEventClose={CloseForm}>
        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm">Order Finished</label>
              <input name="orderFinished" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-sm" >Title</label>
              <input name="title" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-sm" >Description</label>
              <input name="description" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-sm">Finished date</label>
              <input name="finishedDate" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-sm">Image</label>
              <input name="image" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-sm">Rating</label>
              <input name="rating" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring" />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
          </div>
        </form>
      </SideForm>
    </section>
  );
}