import ProductCard from "@/components/ProductCard/ProductCard";
import type { Product } from "@/src/types/product";

const products: Product[] = [
  {
    id: 1,
    name: "Batata Suprema",
    price: 35,
    avaliable: true,
  },
  {
    id: 2,
    name: "Calabresa Acebolada",
    price: 28,
    avaliable: true,
  },
  {
    id: 3,
    name: "Frango à Passarinho",
    price: 32,
    avaliable: false,
  },
];

export default function Home() {
  return (
    <main className="p-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id}
          product={product}
        />
      ))}
    </main>
  );
}
