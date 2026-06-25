import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition";

  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    secondary: "border border-orange-500 text-orange-600 hover:bg-orange-50",
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
