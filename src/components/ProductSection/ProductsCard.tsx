import Image from "next/image";
import HoverMenu from "./HoverMenu";
import Link from "next/link";
import Icon from "../Icon";

interface ProductsCardProps {
    image: {
        src: string,
        width: number,
        height: number,
    },
    title: string,
    price: {
        standart: number,
        sale?: number,
    },
}

export default function ProductsCard({ image, title, price }: ProductsCardProps) {
    return (
        <li className='products__card'>
            <div className='products__image-container'>
                <Link href={'/'}>
                    <Image
                        className="products__image"
                        src={image.src}
                        width={image.width}
                        height={image.height}
                        alt="product"
                    />
                </Link>
                <HoverMenu />
            </div>
            <div className="products__content">
                <h3>
                    <Link className='products__title' href={'/'}>
                        {title}
                    </Link>
                </h3>
                <div className='products__price'>
                    <p className="products__price-standart">
                        ${price.sale ?
                            price.standart - (price.standart * price.sale / 100) :
                            price.standart
                        }
                    </p>
                    {price.sale && (
                        <p className="products__price-plus-sale">
                            ${price.standart}
                        </p>
                    )}
                </div>
            </div>
            {price.sale && <span className="products__sale-flag">{price.sale}% off</span>}
            <div className="products__cart-flag">
                <Icon id="cart" width={18} height={18} />
            </div>
        </li>
    );
}