import { useState } from 'react'
import Nav from './components/main/nav'
import { HomePage } from './pages/homepage'
import { TaskForm } from './pages/form'
import { Route, Routes } from 'react-router'

function App() {

  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/add' element={<TaskForm/>}></Route>
      </Routes>
    </>
  )
}

export default App
