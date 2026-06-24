import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col items-center gap-10 px-4 py-12 md:flex-row md:py-20">
      <div className="flex-1 text-center md:text-left">
        <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-700">
          Petiscaria Delivery
        </span>

        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-zinc-900 md:text-5xl">
          BELISCO
        </h1>

        <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 md:text-lg">
          Os melhores petiscos da cidade, preparados com sabor, capricho e
          entrega rápida para você curtir em casa.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
          <Link
            href="/cardapio"
            className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Ver Cardápio
          </Link>

          <Link
            href="/cardapio"
            className="rounded-full border border-orange-500 px-6 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-50"
          >
            Fazer Pedido
          </Link>
        </div>
      </div>

      <figure className="flex flex-1 justify-center">
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/belisco.jpeg"
            alt="Porção de batata frita servida pela Belisco"
            width={520}
            height={520}
            className="h-auto w-full max-w-sm object-cover md:max-w-md"
            priority
          />
        </div>
      </figure>
    </section>
  );
}
