import HeroCarousel from "@/components/HeroCarousel";
import Marquee from "@/components/Marquee";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroCarousel />
        <Marquee />
        <Categories />
        <FeaturedProducts />
        <Newsletter />
      </main>
    </div>
  );
}
