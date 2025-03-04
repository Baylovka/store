import ProductDetails from "@/components/ProductPage/ProductDetails";
import ProductImages from "@/components/ProductPage/ProductImages";
import ProductTabs from "@/components/ProductPage/ProductTabs/ProductTabs";
import Slider from "@/components/Slider";

export default function ProductPage() {
    return (
        <div className="product-page">
            <div className="container product-page__main-section--outer-container">
                <section className="product-page__main-section">
                    <ProductImages />
                    <ProductDetails />
                </section>
            </div>
            <section className="product-page__tabs-section">
                <div className="container">
                    <ProductTabs />
                </div>
            </section>

            <section className="product-page__related-product-section">
                <div className="container">
                    <h2 className="product-page__title">Related Products</h2>
                    <Slider />
                </div>
            </section>
        </div>
    );
}

