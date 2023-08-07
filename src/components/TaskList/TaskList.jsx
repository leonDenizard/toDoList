export function TaskList({ itens }) {
  return (
    <div className="relative mt-8">
      <ul className="flex flex-col gap-2">
        {itens.map((item, index) => (
          <li className="first-letter:uppercase font-bold font-Roboto text-sm text-purple-950 bg-purple-200
            pl-4 pr-1 py-2 rounded-md hover:bg-purple-500 hover:text-white transition cursor-pointer
            flex items-center justify-between" key={index}>{item}
            
            <i className='bx bx-check text-2xl bg-purple-400 rounded-full w-7 h-7 flex items-center justify-center'></i>
            </li>
        ))}
      </ul>
    </div>
  )
}
