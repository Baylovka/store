import Link from "next/link";
import Button from "../Button";

const totals = {
    subtotal: 2683,
    shiping: 16,
    discount: 2
}

export default function CartCalculate() {
    return (
        <div className="cart-calculate">
            <h2 className="cart-calculate__title">
                Cart Totals
            </h2>

            <hr className="cart-calculate__decor-line" />

            <div className="cart-calculate__container">
                <form className="cart-calculate__form">
                    <label htmlFor="coupon-code" className="cart-calculate__form-label">Coupon Apply</label>
                    <div className="cart-calculate__form-field">
                        <input
                            className="cart-calculate__form-input"
                            name="coupon-code"
                            type="text"
                            placeholder="Enter coupon code..."
                            required
                        />
                        <button className="cart-calculate__form-button">Apply</button>
                    </div>
                </form>
                <ul className="cart-calculate__list">
                    <li className="cart-calculate__item">
                        <span>Subtotal</span>
                        <span className="cart-calculate__item--price">${totals.subtotal}</span>
                    </li>
                    <li className="cart-calculate__item">
                        <span>Coupon Discount</span>
                        <span className="cart-calculate__item--price">(-)&nbsp;{totals.discount}</span>
                    </li>
                    <li className="cart-calculate__item">
                        <span>Shiping</span>
                        <span className="cart-calculate__item--price">${totals.shiping}</span>
                    </li>
                </ul>

                <div className="cart-calculate__total-block">
                    <span className="cart-calculate__total-block--title">Total</span>
                    <span className="cart-calculate__total-block--price">${totals.subtotal + totals.shiping - totals.discount}</span>
                </div>

                <div className="cart-calculate__actions-block">
                    <Button className="cart-calculate__button">Proceed To Checkout</Button>
                    <Link href={'/'} className="link cart-calculate__link">Continue Shopping</Link>
                </div>
            </div>
        </div>
    );
}