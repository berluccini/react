import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/foolter/Foolter'
import Navbar from './components/navbar/Navbar'
import Home from './assets/pages/Home/Home'
import Cadastro from './assets/pages/cadastrar/cadastrar'
import Login from './assets/pages/login/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]" >
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/Login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App