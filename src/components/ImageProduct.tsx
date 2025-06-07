import Link from "next/link";
import Image from "next/image";

interface ImageProductProps {
    link: string;
    src: string;
    width: number;
    height: number;
    className?: string;
}

export default function ImageProduct({ link, src, width, height, className }: ImageProductProps) {
    return (
        <div className={`image-product ${className}`}>
            <Link href={link} className="image-product__link">
                <Image
                    className="image-product__image"
                    src={src}
                    width={width}
                    height={height}
                    alt="product"
                />
            </Link>
        </div>
    );
}