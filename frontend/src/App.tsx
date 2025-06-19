import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Products from './pages/Products'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Products />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
