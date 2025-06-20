import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";
import { useEffect } from "react";
import { createOrder } from "../services/orders";

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

  useEffect(() => {
    console.log("cartItems no cart:", cartItems);
  }, [cartItems]);

  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * (item.quantity ?? 1);
  }, 0);

  const handleSubmit = async () => {
    try {
      await createOrder(cartItems);
      toast.success("Pedido enviado com sucesso!");
      clearCart();
    } catch (error) {
      console.error("Erro ao enviar pedido", error);
      toast.error("Erro ao finalizar compra. Tente novamente.");
    }
  };

  return (
    <div className="cart">
      <h2 className="title">Carrinho de Compras</h2>

      {cartItems.length === 0 ? (
        <p className="font-bold">Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="list">
                <strong className="w-[300px] text-blue-700">{item.name}</strong>
                <p>
                  R$ {item.price.toFixed(2)}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, (item.quantity || 1) - 1)
                      }
                      className="btn-sum-sub"
                    >
                      -
                    </button>
                    <span>{item.quantity ?? 1}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, (item.quantity || 1) + 1)
                      }
                      className="btn-sum-sub"
                    >
                      +
                    </button>
                  </div>
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="button"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>

          <p>
            <strong>Total: R$ {total.toFixed(2)}</strong>
          </p>

          <button
            onClick={() => {
              clearCart();
            }}
            className="button"
          >
            Limpar carrinho de compras
          </button>
          <button
            onClick={handleSubmit}
            className="button"
          >
            Finalizar compra
          </button>
        </>
      )}
    </div>
  );
}
