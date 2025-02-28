import Button from "@/components/Button";
import Counter from "@/components/Counter";

interface BottomProductMenuProps {
    counter: {
        decrement: () => void;
        increment: () => void;
        count: number;
    }
    price: {
        standart: number;
        sale: number;
    }
}

export default function BottomProductMenu({ counter, price }: BottomProductMenuProps) {
    const { decrement, increment, count } = counter;
    const { standart, sale } = price;

    return (
        <div className="bottom-product-menu">
            <div className="bottom-product-menu__top-container">
                <div className="bottom-product-menu__counter-container">
                    <p className="bottom-product-menu__counter-title">Qty</p>
                    <Counter
                        classStyleName="product-page-mobile"
                        decrement={decrement}
                        increment={increment}
                        count={count}
                    />
                </div>
                <div className="bottom-product-menu__price">
                    <p className="bottom-product-menu__price--sale">
                        ${sale ?
                            standart - (standart * sale / 100) :
                            standart
                        }
                    </p>
                    <p className="bottom-product-menu__price--standart">${standart}</p>
                </div>
            </div>
            <div className="bottom-product-menu__bottom-container">
                <Button className="bottom-product-menu__button--green bottom-product-menu__button">Buy Now</Button>
                <Button className="bottom-product-menu__button--white bottom-product-menu__button" iconId="mobile-cart" />
            </div>
        </div>
    );
}