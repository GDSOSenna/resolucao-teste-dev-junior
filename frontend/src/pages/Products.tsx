import { useEffect, useState } from 'react';
import { fetchProductsByProvider } from '../services/products';
import ProductCard from '../components/ProductCard';

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

  useEffect(() => {
    fetchProductsByProvider(provider)
      .then(setProducts)
      .catch((err) => console.error('Erro ao buscar produtos', err));
  }, [provider]);

  return (
    <div style={{ padding: 20 }}>
      <label>
        Fornecedor:{" "}
        <select value={provider} onChange={(e) => setProvider(e.target.value as 'brazilian' | 'european')}>
          <option value="brazilian">Brasileiro</option>
          <option value="european">Europeu</option>
        </select>
      </label>

      <div style={{ marginTop: 20 }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            onAddToCart={() => console.log('Adicionar ao carrinho:', product)}
          />
        ))}
      </div>
    </div>
  );
}
