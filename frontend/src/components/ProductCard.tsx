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
    <div style={{ border: '1px solid #ccc', padding: 12, marginBottom: 12 }}>
      <img src={imageUrl} alt={name} width={150} onError={() =>
        setImgSrc('https://placehold.co/150x150?text=Imagem+indisponível')
      } style={{ objectFit: 'cover' }} />
      <h3>{name}</h3>
      <p><strong>R$ {price.toFixed(2)}</strong></p>
      <button onClick={onAddToCart}>Adicionar ao carrinho</button>
    </div>
  );
};

export default ProductCard;
