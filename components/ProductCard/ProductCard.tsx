import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <div className="border rouded-lg p-4 mb-4">
      <h2 className="text-xl font-bold">{product.name}</h2>

      <p className="mt-2">R$ {product.price}</p>

      <p className="mt-2">{product.avaliable ? "Disponível" : "Indisponível"}</p>
    </div>
  );
}