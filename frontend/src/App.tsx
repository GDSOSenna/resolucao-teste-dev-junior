import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Products from './pages/Products'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Products />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
