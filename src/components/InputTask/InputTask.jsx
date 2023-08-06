export function InputTask() {
  return (
    <div className="relative max-w-full flex justify-center gap-4 top-14">
      <input
        className="px-4 outline-none bg-purple-200 rounded-md text-base text-purple-950 font-Roboto font-medium placeholder:font-normal placeholder:italic
            max-w-90 w-full"
        type="text"
        name="task"
        id="task"
        placeholder="Digite sua tarefa.."
      />
      
      <i className='bx bxs-plus-circle text-purple-400 text-4xl hover:text-purple-600 transition cursor-pointer'></i>
      
    </div>
  );
}
