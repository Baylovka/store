import BlogSectionCard from "./BlogSectionCard";

const cards = [
    {
        image: {
            url: '/blog-1.webp',
            width: 536,
            height: 391
        },
        info: {
            date: "September 12",
            timeRead: "Read in 6 minutes"
        },
        title: 'Cactus & Succulent Care Tips',
        description: 'Cacti are succulents are easy care plants for any home or patio.'
    },
    {
        image: {
            url: '/blog-2.webp',
            width: 536,
            height: 391
        },
        info: {
            date: "September 13",
            timeRead: "Read in 2 minutes"
        },
        title: 'Top 10 Succulents for Your Home',
        description: 'Best in hanging baskets. Prefers medium to high light.'
    },
    {
        image: {
            url: '/blog-3.webp',
            width: 536,
            height: 391
        },
        info: {
            date: "September 15",
            timeRead: "Read in 3 minutes"
        },
        title: 'Cacti & Succulent Care Tips',
        description: 'Cacti and succulents thrive in containers and because most are.'
    },
    {
        image: {
            url: '/blog-4.webp',
            width: 536,
            height: 391
        },
        info: {
            date: "September 15",
            timeRead: "Read in 2 minutes"
        },
        title: 'Best Houseplants Room by Room',
        description: 'The benefits of houseplants are endless. In addition to lorem ipsum lalala'
    }
];

export default function BlogSection() {
    return (
        <section className="blog-section">
            <h2 className="section__title">Our Blog Posts</h2>
            <p className="section__subtitle">
                We are an online plant shop offering a wide range of cheap and trendy plants.
            </p>
            <div className="blog-section__container">
                {cards && cards.map((card, index) => (
                    <BlogSectionCard
                        key={index}
                        image={{ url: card.image.url, width: card.image.width, height: card.image.height }}
                        info={{ date: card.info.date, timeRead: card.info.timeRead }}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </section>
    );
}