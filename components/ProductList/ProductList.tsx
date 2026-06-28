import ProductCard from "@/components/ProductCard/ProductCard";
import { products } from "@/data/products";

export default function ProductList() {
  return (
    <section>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
