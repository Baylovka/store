import BlogSection from "@/components/BlogSection";
import MainSlider from "@/components/MainSlider";
import ProductSection from "@/components/ProductSection/ProductSection";
import PromoSection from "@/components/PromoSection";

export default function Home() {
  return (
    <div className="container">
      <MainSlider />
      <ProductSection />
      <PromoSection />
      <BlogSection />
    </div>
  );
}
