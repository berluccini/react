import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/foolter/Foolter'
import Navbar from './components/navbar/Navbar'
import { AuthProvider } from './contexts/AuthContexts'
import Cadastro from './assets/pages/cadastrar/cadastrar'
import Home from './assets/pages/Home/Home'
import Login from './assets/pages/login/Login'

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App