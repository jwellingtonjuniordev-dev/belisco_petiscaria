type ProductCardProps = {
  name: string;
  price: number;
  avaliable: boolean;
};

export default function ProductCard({
  name,
  price,
  avaliable,
}: ProductCardProps) {
  return (
    <div className="border rouded-lg p-4 mb-4">
      <h2 className="text-xl font-bold">{name}</h2>

      <p className="mt-2">R$ {price}</p>

      <p className="mt-2">{avaliable ? "Disponível" : "Indisponível"}</p>
    </div>
  );
}
