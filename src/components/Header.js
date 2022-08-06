export default function Header({isOpen,setIsOpen}) {
    return (
      <header className="bg-blue-500">
        <div className="flex justify-between h-14 items-center max-w-5xl mx-auto px-6">
          <h3 className="text-white text-2xl font-bold">SoftTodo</h3>
          <button onClick={()=>{
    setIsOpen(true)
}} className="bg-white px-3 py-2 rounded shadow-md hover:bg-blue-200">
            Add New
          </button>
        </div>
      </header>
    );
  }
   