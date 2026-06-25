import Link from "next/link";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Cardápio", href: "/cardapio" },
  { label: "Promoções", href: "/promocoes" },
  { label: "Contato", href: "/contato" },
];

export default function Navbar() {
  return (
    <nav aria-label="Navegação principal">
      <ul className="flex items-center gap-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-medium text-zinc-700 transition hover:text-orange-500"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
