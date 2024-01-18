import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from '/Users/FELIPE/Desktop/react/blogpessoal/src/components/foolter/Foolter.tsx'
import Navbar from '/Users/FELIPE/Desktop/react/blogpessoal/src/components/navbar/Navbar.tsx'
import Home from '/Users/FELIPE/Desktop/react/blogpessoal/src/assets//pages/home/Home.tsx'
import Login from '/Users/FELIPE/Desktop/react/blogpessoal/src/assets//pages/login/Login.tsx'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <div className='min-h-[80vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          

        </Routes>

      </div>
      <Footer/>
      </BrowserRouter>    
    </>
  )
}

export default App