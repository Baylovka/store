import Image from 'next/image';

interface MainSlideProps {
    subtitle?: string;
    title: string;
    titleBrand: string;
    description: string;
    buttonText: string;
    imageUrl: string;
}

export default function MainSlide({ subtitle, title, titleBrand, description, buttonText, imageUrl }: MainSlideProps) {
    return (
        <div className="main-slide">
            <div className="main-slide__content">
                <p className='main-slide__subtitle'>{subtitle}</p>
                <h1 className="main-slide__title">
                    {title}&nbsp;
                    <span className='main-slide__title--brand'>{titleBrand}</span>
                </h1>
                <p className="main-slide__description">{description}</p>
                <button className="main-slide__button button">{buttonText}</button>
            </div>
            <div className="main-slide__image-container">
                <Image className="main-slide__image" src={imageUrl} alt={title} width={1018} height={1018} />
            </div>
        </div>
    );
}
