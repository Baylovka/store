'use client'

import useCounter from "@/hooks/useCounter";
import ButtonIcon from "../ButtonIcon";
import Counter from "../Counter";
import ImageProduct from "../ImageProduct";
import Link from "next/link";

const products = [
    {
        name: "Barberton Daisy barberton Daisy",
        sku: "1995751877966",
        size: "S",
        color: "Black",
        total: "$400.00",
        price: "$119.0",
        quantity: 2,
        img: "/promo-1.webp"
    },
    {
        name: "Blushing Bromeliad",
        sku: "2995751986966",
        size: "M",
        color: "Green",
        total: "$4020.00",
        price: "$1129.0",
        quantity: 6,
        img: "/promo-2.webp"
    },
    {
        name: "Aluminum Plant",
        sku: "3995751877926",
        size: "52/XXL",
        color: "Yellow",
        total: "$400.00",
        price: "$119.0",
        quantity: 10,
        img: "/banner-1.webp"
    }
]

export default function CartTable() {
    const { increment, decrement, count } = useCounter(1);

    return (
        <table className="cart-table">
            <thead className="cart-table__header">
                <tr>
                    <th>Product</th>
                    <th className="cart-table__hide--tablet">Size</th>
                    <th className="cart-table__hide--tablet">Color</th>
                    <th className="cart-table__hide--mobile">Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="cart-table__body">
                {products && products.map((product, index) => (
                    <tr className="cart-table__product" key={index}>
                        <td className="cart-table__column cart-table__column--name">
                            <div className="cart-table__name-image-container">
                                <ImageProduct className="cart-table__product-image" link="/" src={product.img} width={70} height={70} />
                                <div className="cart-table__product-name-container">
                                    <h2 className="cart-table__product-name">
                                        <Link href={'/'}>
                                            {product.name}
                                        </Link>
                                    </h2>
                                    <p className="cart-table__product-type">
                                        SKU:&nbsp;
                                        <span className="cart-table__product-type--value">
                                            {product.sku}
                                        </span>
                                    </p>
                                    <div className="cart-table__product-tablet-block">
                                        <p className="cart-table__product-type">
                                            Size:&nbsp;
                                            <span className="cart-table__product-type--value">
                                                {product.size}
                                            </span>
                                        </p>
                                        <p className="cart-table__product-type">
                                            Color:&nbsp;
                                            <span className="cart-table__product-type--value">
                                                {product.color}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="cart-table__product-mobile-block">
                                        {product.total}
                                        <div className="cart-table__mobile-functional-block">
                                            <Counter
                                                classStyleName="cart-page"
                                                decrement={decrement}
                                                increment={increment}
                                                count={count}
                                            />
                                            <ButtonIcon className="cart-table__product-delete-btn" iconId="delete" width={20} height={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="cart-table__column cart-table__column--size">{product.size}</td>
                        <td className="cart-table__column cart-table__column--color">{product.color}</td>
                        <td className="cart-table__column cart-table__column--price">{product.price}</td>
                        <td className="cart-table__column cart-table__column--count">
                            <Counter
                                classStyleName="cart-page"
                                decrement={decrement}
                                increment={increment}
                                count={count}
                            />
                        </td>
                        <td className="cart-table__column cart-table__column--total">{product.total}</td>
                        <td className="cart-table__column cart-table__column--btn-delete">
                            <ButtonIcon className="cart-table__product-delete-btn" iconId="delete" width={20} height={20} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}