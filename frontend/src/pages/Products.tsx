import { useEffect, useState } from 'react';
import { fetchProductsByProvider } from '../services/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  provider: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [provider, setProvider] = useState<'brazilian' | 'european'>('brazilian');
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProductsByProvider(provider)
      .then(setProducts)
      .catch((err) => console.error('Erro ao buscar produtos', err));
  }, [provider]);

  return (
    <div  className='filter'>
      <label className='filter-label'>
        Fornecedor:{" "}
        <select value={provider} onChange={(e) => setProvider(e.target.value as 'brazilian' | 'european')} className='outline-none shadow cursor-pointer'>
          <option value="brazilian">Brasileiro</option>
          <option value="european">Europeu</option>
        </select>
      </label>

      <div className='div-products'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            onAddToCart={() => {
              addToCart(product),
              toast.success('Produto adicionado ao carrinho!')
            }}
          />
        ))}
      </div>
    </div>
  );
}
