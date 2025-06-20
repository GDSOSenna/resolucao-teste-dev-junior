import api from "./api";

export async function fetchProductsByProvider(
  provider: "brazilian" | "european",
) {
  const response = await api.get(`/products/provider/${provider}`);

  const fixImage = (url?: string) => url?.replace("placeimg.com", "placehold.co") || "https://placehold.co/150x150?text=Sem+Imagem"
    
  const normalized = response.data.map((item: any) => ({
    id: `${provider}:${item.id}`,
    name: (item.name || item.nome)?.toUpperCase(),
    price: parseFloat(item.price || item.preco),
    description: item.description || item.description,
    imageUrl: fixImage(item.imageUrl || item.image || item.gallery?.[0]),
    provider,
  }));

  return normalized;
}
