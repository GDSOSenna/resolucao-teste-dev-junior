import api from './api';

export async function fetchProductsByProvider(provider: 'brazilian' | 'european') {
  const response = await api.get(`/products/provider/${provider}`);

  const normalized = response.data.map((item: any) => ({
    id: `${provider}:${item.id}`,
    name: (item.name || item.nome)?.toUpperCase(),
    price: parseFloat(item.price || item.preco),
    imageUrl: item.imageUrl?.replace('placeimg.com', 'placehold.co') ||
    item.gallery?.[0]?.replace('placeimg.com', 'placehold.co') ||
    'https://placehold.co/150x150?text=Sem+Imagem',
  provider,
  }));

  return normalized;
}
