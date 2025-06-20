import axios from "axios";
import type { Product } from "../context/CartContext";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  provider: string;
  imageUrl: string;
}

interface CreateOrderPayload {
  items: OrderItem[];
}

export async function createOrder(cartItems: Product[]) {
  const payload: CreateOrderPayload = {
    items: cartItems.map((item) => ({
      productId: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity || 1,
      provider: item.provider,
      imageUrl: item.imageUrl,
    })),
  };

  const response = await api.post("/orders", payload);
  return response.data
}
