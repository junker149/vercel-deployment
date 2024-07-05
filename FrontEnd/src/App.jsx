import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './routes/Landing'
import { Signup} from './routes/Signup'
import { Login } from './routes/Login'
import { UserTodos } from './routes/UserTodos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-mono text-slate-300'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/:id' element={<UserTodos/>}></Route>
        </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App
