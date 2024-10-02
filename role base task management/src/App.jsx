import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Auth/Login'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './components/Auth/Home'
import TaskManager from './components/Auth/TaskManager '
import Importanttask from './components/Auth/Importanttask'
import Register from './components/Auth/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/taskManager" element={<TaskManager />} />
          <Route path="/importanttask" element={<Importanttask />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Other routes */}
        </Routes>
      </div>
    </>
  )
}

export default App
