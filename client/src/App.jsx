import { Outlet } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Outlet/>
      {/* <Footer/> */}
    </>
  )
}

export default App
