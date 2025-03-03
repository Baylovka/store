'use client'
import Link from "next/link";
import Button from "../Button";
import Icon from "../Icon";
import Counter from "../Counter";
import useCounter from "@/hooks/useCounter";
import { useState } from "react";
import RatingStars from "./RatingStars";
import BottomProductMenu from "../Mobile/BottomProductMenu/BottomProductMenu";

const prod = {
    title: "Barberton Daisy",
    price: {
        standart: 229,
        sale: 13,
    },
    rating: {
        average: 4.4,
        count: 19,
    },
    shortDescription: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.",
    sizes: ["S", "M", "L", "XL"],
    SKU: "1995751877966",
    categories: "Potter Plants",
    tags: ["Home", "Garden", "Plants"]
}

export default function ProductDetails() {
    const { count, increment, decrement } = useCounter();
    const [activeSize, setActiveSize] = useState<number>(0);

    return (
        <div className="product-page__details product-details">
            <div className="product-details__mobile-title-container">
                <h1 className="product-details__main-title">{prod.title}</h1>
                <div className="product-details__mobile-rating-container">
                    <div className="product-details__mobile-rating-average">
                        <Icon id="star" width={12} height={12} />
                        {prod.rating.average}
                    </div>
                    <p className="product-details__mobile-rating-count">({prod.rating.count})</p>
                </div>
            </div>

            <div className="product-details__price-rating-container">
                <div className="product-details__price">
                    <p className="product-details__price--sale">
                        ${prod.price.sale ?
                            prod.price.standart - (prod.price.standart * prod.price.sale / 100) :
                            prod.price.standart
                        }
                    </p>
                    <p className="product-details__price--standart">${prod.price.standart}</p>
                </div>
                <div className="product-details__rating">
                    <RatingStars average={prod.rating.average} uniqueIdPartialFill="details-rating-fill"/>
                    <p className="product-details__rating-count">{prod.rating.count}&nbsp;Customer Review</p>
                </div>
            </div>

            <hr className="product-details__decor-line" />

            <div className="product-details__short-description-container">
                <h2 className="product-details__second-title product-details__short-description-title">
                    Short Description:
                </h2>
                <p className="product-details__short-description">{prod.shortDescription}</p>
            </div>

            <div className="product-details__size-container">
                <h2 className="product-details__second-title">Size:</h2>
                <div className="product-details__size-block">
                    {prod.sizes && prod.sizes.map((size, index) => (
                        <span
                            key={index}
                            className={`product-details__size ${index === activeSize && "product-details__size--active"}`}
                            onClick={() => index !== activeSize && setActiveSize(index)}
                        >
                            {size}
                        </span>
                    ))}
                </div>
            </div>

            <div className="product-details__action-container">
                <Counter
                    classStyleName="product-page"
                    decrement={decrement}
                    increment={increment}
                    count={count}
                />
                <div className="product-details__action-buttons">
                    <Button className="product-details__button">BUY NOW</Button>
                    <Button className="product-details__button--white">ADD TO CART</Button>
                </div>
            </div>

            <div className="product-details__info-container">
                <p className="product-details__info">
                    <span className="product-details__info--title">SKU:&nbsp;</span>
                    {prod.SKU}
                </p>
                <p className="product-details__info">
                    <span className="product-details__info--title">Categories:&nbsp;</span>
                    {prod.categories}
                </p>
                <p className="product-details__info">
                    <span className="product-details__info--title">Tags:&nbsp;</span>
                    {prod.tags.join(", ")}
                </p>
            </div>

            <div className="product-details__share-container">
                <h2 className="product-details__second-title">Share this products:</h2>
                <div className="product-details__share">
                    <Link href={'/'}>
                        <Icon id="instagram" width={15} height={15} />
                    </Link>
                    <Link href={'/'}>
                        <Icon id="facebook" width={15} height={15} />
                    </Link>
                    <Link href={'/'}>
                        <Icon id="twitter" width={15} height={15} />
                    </Link>
                    <Link href={'/'}>
                        <Icon id="linkedin" width={15} height={15} />
                    </Link>
                    <Link href={'/'}>
                        <Icon id="message" width={15} height={15} />
                    </Link>
                </div>
            </div>
            <BottomProductMenu
                counter={{ decrement, increment, count }}
                price={{ standart: prod.price.standart, sale: prod.price.sale }}
            />
        </div>
    );
}