import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
const handleEdit = ()=>{

}
const handleDelete = ()=>{

}
const handleAdd = ()=>{

}
  return (
    <>
    <Navbar/>

      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input type="text className = w-1/2 " />
          <button onClick={handleAdd} className='bg-violet-700 hover:bg-violet-800 p-2 py-1 text-sm font-bold text-white 
        rounded-md mx-6'>Add</button>
          <h2 className='text-lg font-bold'>Your Todos</h2>
          <div className="todos">
            <div className="todo flex">
              <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing.</div>
              <div className="buttons">
                <button onClick={handleEdit} className='bg-violet-700 hover:bg-violet-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Edit</button>
                <button onClick={handleDelete} className='bg-violet-700 hover:bg-violet-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Delete</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
