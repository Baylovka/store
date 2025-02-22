import ProductDetails from "@/components/ProductPage/ProductDetails";
import ProductImages from "@/components/ProductPage/ProductImages";

export default function ProductPage() {
    return (
        <div className="product-page">
            <div className="container">
                <div className="product-page__main-section">
                    <ProductImages />
                    <ProductDetails />
                </div>
            </div>
        </div>
    );
}

