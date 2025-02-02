import BlogSection from "@/components/BlogSection";
import MainSlider from "@/components/MainSlider";
import PromoSection from "@/components/PromoSection";

export default function Home() {
  return (
    <div className="container">
      <MainSlider />
      <PromoSection />
      <BlogSection/>
    </div>
  );
}
