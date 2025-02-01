import Image from "next/image";
import Button from "./Button";

interface PromoCardProps {
    image: {
        url: string;
        width: number;
        height: number;
    };
    title: string;
    description: string;
    nameButton: string;
}

export default function PromoCard({ image, title, description, nameButton }: PromoCardProps) {
    return (
        <div className="promo__card">
            <div className="promo__image-container">
                <Image className="promo__image" src={image.url} alt="promo" width={image.width} height={image.height} />
            </div>
            <div className="promo__content">
                <h3 className="promo__title">{title}</h3>
                <p className="promo__description">{description}</p>
                <Button className="promo__button" iconId="arrow">{nameButton}</Button>
            </div>
        </div>
    );
}