import ProductCard from "@/components/ProductCard/ProductCard";

const products = [
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
    <main>
      {products.map((product) => (
        <ProductCard 
          key={product.id}
          name={product.name}
          price={product.price}
          avaliable={product.avaliable}
        />
      ))}
    </main>
  );
}
