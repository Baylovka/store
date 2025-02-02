import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

interface BlogCardProps {
    image: {
        url: string;
        width: number;
        height: number;
    };
    info: {
        date: string;
        timeRead: string;
    }
    title: string;
    description: string;
}

export default function BlogSectionCard({ image, info, title, description }: BlogCardProps) {
    return (
        <div className="blog-section__card">
            <div className="blog-section__image-container">
                <Image
                    className="blog-section__image"
                    src={image.url}
                    width={image.width}
                    height={image.height}
                    alt="plant"
                />
            </div>
            <div className="blog-section__content-container">
                <div className="blog-section__content">
                    <p className="blog-section__info">{info.date}&nbsp;|&nbsp;{info.timeRead}</p>
                    <h3 className="blog-section__title">{title}</h3>
                    <p className="blog-section__description">{description}</p>
                </div>
                <Link className="blog-section__link link" href={'/'}>
                    <span>Read More</span>
                    <Icon id="arrow" width={12} height={12} />
                </Link>
            </div>
        </div>
    );
}