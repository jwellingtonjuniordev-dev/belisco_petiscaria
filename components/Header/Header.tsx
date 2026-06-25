import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import CartButton from "@/components/CartButton/CartButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-zinc-900"
        >
          BELISCO
        </Link>

        <div className="hidden md:block">
          <Navbar />
        </div>

        <CartButton />
      </div>
    </header>
  );
}
