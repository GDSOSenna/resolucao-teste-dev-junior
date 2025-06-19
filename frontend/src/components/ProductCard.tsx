import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  onAddToCart: () => void;
}

const ProductCard = ({ id, name, price, imageUrl, onAddToCart }: ProductCardProps) => {
  const [imgSrc, setImgSrc] = useState(imageUrl)

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <img
        src={imgSrc}
        alt={name}
        onError={() =>
          setImgSrc('https://placehold.co/150x150')
        }
        style={{
          objectFit: 'cover',
          maxWidth: '150px',
          width: '100%',
          height: 'auto',
          borderRadius: '4px'
        }}
      />
      
      <p className="text-green-700 font-bold">R$ {price.toFixed(2)}</p>
      <button className="button" onClick={onAddToCart}>Adicionar ao carrinho</button>
    </div>
  );
};

export default ProductCard;
