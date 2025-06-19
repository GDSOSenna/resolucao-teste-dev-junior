import { toast } from 'react-toastify';
import { useCart } from '../context/CartContext';
import { useEffect } from 'react';
import { createOrder } from '../services/orders';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  useEffect(() => {
    console.log('cartItems no cart:', cartItems);
  }, [cartItems]);

  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * (item.quantity ?? 1);
  }, 0);

  const handleSubmit = async() => {
    try {
      await createOrder(cartItems)
      toast.success("Pedido enviado com sucesso!")
    } catch (error) {
      console.error("Erro ao enviar pedido", error)
      toast.error("Erro ao finalizar compra. Tente novamente.")
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Carrinho de Compras</h2>

      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} style={{ marginBottom: 10 }}>
                <strong>{item.name}</strong> — R$ {item.price.toFixed(2)} x{' '}
                {item.quantity ?? 1}
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{ marginLeft: 10 }}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>

          <p>
            <strong>Total: R$ {total.toFixed(2)}</strong>
          </p>
          
          <button onClick={() => {clearCart()}}>
            Limpar carrinho de compras
          </button>
          <button onClick={() => {handleSubmit(), clearCart()

          }}>
            Finalizar compra
          </button>
        </>
      )}
    </div>
  );
}
