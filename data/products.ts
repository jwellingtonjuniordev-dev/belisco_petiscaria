import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Batata Suprema",
    description: "Batata frita com cheddar e bacon",
    image: "/images/batata-suprema.png",
    category: "Acompanhamentos",
    price: 35,
    available: true,
  },
  {
    id: 2,
    name: "Calabresa Acebolada",
    description: "Calabresa acebolada com cebola e queijo",
    image: "/images/calabresa-acebolada.png",
    category: "Pratos Principais",
    price: 28,
    available: true,
  },
  {
    id: 3,
    name: "Frango à Passarinho",
    description: "Frango empanado com molho especial",
    image: "/images/frango-a-passarinho.png",
    category: "Pratos Principais",
    price: 32,
    available: false,
  },
  {
    id: 4,
    name: "Super Picanha",
    description: "Picanha grelhada com molho especial",
    image: "/images/picanha-com-batata.png",
    category: "Pratos Principais",
    price: 45,
    available: true,
  },
];
