import Link from "next/link";
import Icon from "./Icon";

export default function CartIcon() {
    const cartItemCount = 6;

    return (
        <Link href={'/'} className="cart-icon">
            <Icon id="cart" width={24} height={24} className="cart-icon__icon" />
            {cartItemCount > 0 && <span className="cart-icon__count">{cartItemCount}</span>}
        </Link>
    );
}