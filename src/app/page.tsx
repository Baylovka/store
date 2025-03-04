import BlogSection from "@/components/BlogSection/BlogSection";
import MainSlider from "@/components/MainSlider/MainSlider";
import ProductSection from "@/components/ProductSection/ProductSection";
import PromoSection from "@/components/PromoSection/PromoSection";

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
