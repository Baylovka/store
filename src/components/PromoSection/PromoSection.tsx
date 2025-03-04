import PromoCard from "./PromoCard";

export default function PromoSection() {
    return (
        <section className="promo">
            <div className="promo__container">
                <PromoCard
                    image={{ url: "/promo-1.webp", width: 584, height: 584 }}
                    title="summer cactus & succulents"
                    description="We are an online plant shop offering a wide range of cheap and trendy plants"
                    nameButton="Find more"
                />
                <PromoCard
                    image={{ url: "/promo-2.webp", width: 574, height: 574 }}
                    title="styling trends & much more"
                    description="We are an online plant shop offering a wide range of cheap and trendy plants"
                    nameButton="Find more"
                />
            </div>
        </section>
    );
}