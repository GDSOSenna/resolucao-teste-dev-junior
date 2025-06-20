import { useEffect, useState } from "react";
import { fetchProductsByProvider } from "../services/products";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  provider: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [provider, setProvider] = useState<"brazilian" | "european">(
    "brazilian",
  );
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success("Produto adicionado ao carrinho"!);
  };

  useEffect(() => {
    fetchProductsByProvider(provider)
      .then(setProducts)
      .catch((err) => console.error("Erro ao buscar produtos", err));
  }, [provider]);

  return (
    <div className="filter">
      <div className="flex flex-row items-center">
        <div className="filter-label">
          <label className="w-[110px] text-center">Fornecedor: </label>
          <select
            value={provider}
            onChange={(e) =>
              setProvider(e.target.value as "brazilian" | "european")
            }
            className="outline-none shadow cursor-pointer"
          >
            <option value="brazilian">Brasileiro</option>
            <option value="european">Europeu</option>
          </select>
        </div>
        <label>
          <input
            type="text"
            placeholder="Buscar item..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="searchbar"
          />
        </label>
      </div>
      <>
        {filteredProducts.length === 0 ? (
          <p className="text-gray-500 mt-4">Nenhum produto encontrado.</p>
        ) : (
          <div className="div-products">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                imageUrl={product.imageUrl}
                onAddToCart={() => handleAddToCart(product)}     
              />
            ))}
          </div>
      )}
      </>
    </div>
  );
}
