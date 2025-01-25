import Link from "next/link";
import Icon from "./Icon";

export default function Cart() {
    const cartItemCount = 6;

    return (
        <Link href={'/'} className="cart">
            <Icon id="cart" width={24} height={24} className="cart__icon" />
            {cartItemCount > 0 && <span className="cart__count">{cartItemCount}</span>}
        </Link>
    );
}