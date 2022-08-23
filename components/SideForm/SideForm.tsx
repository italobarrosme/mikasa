import style from './SideForm.module.scss'

export const SideForm = () => {
  return (
    <aside className={style.component}>
      <nav className="space-y-8 text-sm">
        <div className="space-y-2">
          <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Insert New Game</h2>
          <div className="flex flex-col space-y-1">
            <label className="text-sm">Order Finished</label>
            <input name="orderFinished" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring" />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Dashboard</h2>
          <div className="flex flex-col space-y-1">
            <label className="text-sm" >Title</label>
            <input name="title" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring" />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Pages</h2>
          <div className="flex flex-col space-y-1">
            <label className="text-sm" >Description</label>
            <input name="description" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring" />
          </div>
        </div>
      </nav>
    </aside>
  )

}