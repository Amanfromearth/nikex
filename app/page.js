import Nav from "@/components/Nav";
import CTA from "@/sections/CTA";
import CustomerReviews from "@/sections/CustomerReviews";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import ProductPage from "@/sections/ProductPage";
import Services from "@/sections/Services";
import SpecialOffers from "@/sections/SpecialOffers";
import SuperQuality from "@/sections/SuperQuality";

export default function Home() {
  return (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding"><ProductPage/></section>
    <section className="padding"><SuperQuality/></section>
    <section className="padding"><Services/></section>
    <section className="padding"><SpecialOffers/></section>
    <section className="padding bg-pale-blue w-full"><CustomerReviews/></section>
    <section className="padding-x sm:py-32 py-16 w-full"><CTA/></section>
    <section className="padding-x padding-t pb-8 bg-black text-white"><Footer/></section>
  </main>
    );
}
