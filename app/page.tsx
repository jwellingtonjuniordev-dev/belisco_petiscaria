import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import ProductList from "@/components/ProductList/ProductList";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ProductList />
      </main>

      <Footer />
    </>
  );
}
