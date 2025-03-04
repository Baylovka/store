import ProductDetails from "@/components/ProductPage/ProductDetails";
import ProductImages from "@/components/ProductPage/ProductImages";
import ProductTabs from "@/components/ProductPage/ProductTabs/ProductTabs";

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
        </div>
    );
}

