import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  onAddToCart: () => void;
}

const ProductCard = ({name, price, description, imageUrl, onAddToCart }: ProductCardProps) => {
  const [imgSrc, setImgSrc] = useState(imageUrl)
  const [expanded, setExpanded] = useState(false);

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
      <p className={`w-[220px] text-sm ${expanded ? '' : 'line-clamp-2'}`}>
        {description}
      </p>

      {description.length > 80 && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="text-blue-600 text-sm underline w-fit cursor-pointer"
        >
          {expanded ? 'Mostrar menos' : 'Leia mais'}
        </button>
      )}
      <p className="text-green-700 font-bold">R$ {price.toFixed(2)}</p>
      <button className="button" onClick={onAddToCart}>Adicionar ao carrinho</button>
    </div>
  );
};

export default ProductCard;
