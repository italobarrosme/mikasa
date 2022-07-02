export const RegisterGame = () => {
  return (
    <>
      <section className="max-w-4xl p-4 mx-auto rounded-md shadow-md bg-brand-soft max-h-96">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Game Data</h2>

        <form>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm">Order Finished</label>
              <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-sm" >Title</label>
              <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-sm" >Description</label>
              <input id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-sm">Finished date</label>
              <input id="passwordConfirmation" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-sm">Image</label>
              <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-sm">Rating</label>
              <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring" />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
          </div>
        </form>
      </section>
    </>
  );
}