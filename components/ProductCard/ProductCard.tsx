import type { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="border rounded-lg p-4 mb-4">
      <figure className="mb-4">
        <Image
          src={product.image}
          alt={product.name}
          width={150}
          height={150}
        />
      </figure>
      <div className="border rounded-lg p-4 mb-4">
        <h3 className="text-xl font-bold">{product.name}</h3>

        <span className="mt-2">R$ {product.price}</span>

        <p className="mt-2">
          <strong>Status: </strong>
          {product.available ? "Disponível" : "Indisponível"}
        </p>
      </div>
      <Link
        href={`/cart`}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Adicionar ao Carrinho
      </Link>
    </article>
  );
}
