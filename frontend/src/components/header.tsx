import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce(
    (acc, item) => acc + (item.quantity ?? 1),
    0,
  );

  return (
    <>
      <header>
        <nav className="navbar">
          <Link to="/" className="logo">
            <h1>E-commerce</h1>
          </Link>
          <div className="navbar-icons">
            <Link to="/cart" className="text-3xl hover:scale-110 relative">
              <FiShoppingCart />{" "}
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-[15px] text-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
