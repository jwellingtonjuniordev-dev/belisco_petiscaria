import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center my-8 px-4">
      <div>
        <h1 className="my-4">BELISCO</h1>

        <p className="my-2">
          Os melhores petiscos da cidade, entregues na sua casa.
        </p>

        <Link href="/cardapio">Ver Cardápio</Link>
      </div>

      <figure>
        <Image
          src="/images/belisco"
          alt="Porção de batata frita servida pela Belisco"
          width={500}
          height={500}
        />
      </figure>
    </section>
  );
}
