import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Products from './pages/Products'
import Cart from './pages/Cart'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Products />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
