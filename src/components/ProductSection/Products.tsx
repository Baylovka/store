import ProductsCard from './ProductsCard';

const products = [
    {
        image: {
            src: "/promo-2.webp",
            width: 574,
            height: 574,
        },
        title: "Barberton Daisy",
        price: {
            standart: 229.00,
            sale: 13
        },
    },
    {
        image: {
            src: "/banner-2.webp",
            width: 574,
            height: 574,
        },
        title: "Barberton Daisy",
        price: {
            standart: 119.00,
        },
    },
    {
        image: {
            src: "/promo-1.webp",
            width: 574,
            height: 574,
        },
        title: "Barberton Daisy",
        price: {
            standart: 119.00,
            sale: 25
        },
    },
    {
        image: {
            src: "/banner-1.webp",
            width: 574,
            height: 574,
        },
        title: "Barberton Daisy",
        price: {
            standart: 119.00,
        },
    },
    {
        image: {
            src: "/promo-2.webp",
            width: 574,
            height: 574,
        },
        title: "Barberton Daisy",
        price: {
            standart: 119.00,
        },
    },
    {
        image: {
            src: "/promo-1.webp",
            width: 574,
            height: 574,
        },
        title: "Barberton Daisy",
        price: {
            standart: 119.00,
        },
    },
    {
        image: {
            src: "/promo-2.webp",
            width: 574,
            height: 574,
        },
        title: "Barberton Daisy",
        price: {
            standart: 119.00,
        },
    },
]

export default function ProductList() {
    return (
        <div className='products'>
            <ul className='products__list'>
                {products && products.map((product, index) => (
                    <ProductsCard
                        key={index}
                        image={{
                            src: product.image.src,
                            width: product.image.width,
                            height: product.image.height
                        }}
                        title={product.title}
                        price={{
                            standart: product.price.standart,
                            sale: product.price.sale
                        }}
                    />
                ))}
            </ul>
        </div>
    );
}