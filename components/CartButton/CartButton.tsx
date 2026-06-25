import Link from "next/link";

export default function CartButton() {
  return (
    <Link
      href="/carrinho"
      className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
    >
      Carrinho
    </Link>
  );
}
