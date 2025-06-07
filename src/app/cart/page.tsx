import Breadcrumbs from "@/components/Breadcrumbs"
import CartCalculate from "@/components/CartPage/CartCalculate";
import CartTable from "@/components/CartPage/CartTable";
import Slider from "@/components/Slider";

export default function page() {
    return (
        <div className="cart-page">
            <section className="cart-page__bread-crumbs">
                <div className="container">
                    <Breadcrumbs />
                </div>
            </section>

            <section className="cart-page__cart">
                <div className="container">
                    <div className="cart-page__cart-container">
                        <CartTable />
                        <CartCalculate />
                    </div>
                </div>
            </section>

            <section className="cart-page__recommendations">
                <div className="container">
                    <h2 className="cart-page__recommendations-title">You may be interested in</h2>
                    <Slider />
                </div>
            </section>
        </div>
    );
}