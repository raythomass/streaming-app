import { Outlet } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Homepage';
import Nav from './components/Nav';
import Movies from './components/MoviePoster';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  )
}

export default App
