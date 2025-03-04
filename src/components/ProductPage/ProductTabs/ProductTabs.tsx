'use client'

import { useState } from "react";
import TabDescription from "./TabDescription";
import TabReviews from "./TabReviews";

enum Tabs {
    description = "description",
    reviews = "reviews",
}

const reviews = [
    {
        "name": "Jaxson Aminoff",
        "date": "Jan 12, 2025",
        "rating": 4.5,
        "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae officia ipsum voluptatibus illo et dignissimos ea modi. Eaque natus, ut eum quasi adipisci nesciunt et blanditiis deserunt sit impedit ipsum!"
    },
    {
        "name": "James Schleifer",
        "date": "Jan 12, 2025",
        "rating": 4.7,
        "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae officia ipsum voluptatibus illo et dignissimos ea modi. Eaque natus, ut eum quasi adipisci nesciunt et blanditiis deserunt sit impedit ipsum!"
    },
    {
        "name": "Miracle Geidt",
        "date": "Jan 12, 2068",
        "rating": 5,
        "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae officia ipsum voluptatibus illo et dignissimos ea modi. Eaque natus, ut eum quasi adipisci nesciunt et blanditiis deserunt sit impedit ipsum!"
    },
    {
        "name": "Terry Kenter",
        "date": "Jan 12, 2025",
        "rating": 3,
        "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae officia ipsum voluptatibus illo et dignissimos ea modi. Eaque natus, ut eum quasi adipisci nesciunt et blanditiis deserunt sit impedit ipsum!"
    },
    {
        "name": "Ruben Torff",
        "date": "Jan 12, 2025",
        "rating": 5,
        "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae officia ipsum voluptatibus illo et dignissimos ea modi. Eaque natus, ut eum quasi adipisci nesciunt et blanditiis deserunt sit impedit ipsum!"
    },
    {
        "name": "Alena Aminoff",
        "date": "Jan 12, 2025",
        "rating": 2.1,
        "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae officia ipsum voluptatibus illo et dignissimos ea modi. Eaque natus, ut eum quasi adipisci nesciunt et blanditiis deserunt sit impedit ipsum!"
    }
]

const description = `The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.Donec ac tempus ante.Fusce ultricies massa massa.Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Cras neque metus, consequat et blandit et, luctus a nunc.Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.`;

export default function ProductTabs() {
    const [activeTab, setActiveTab] = useState<string>(Tabs.description);
    return (
        <div className="product-tabs">
            <ul className="product-tabs__list-tabs">
                <li
                    className={`product-tabs__tab ${activeTab === Tabs.description ? "product-tabs__tab--active" : ""}`}
                    onClick={() => setActiveTab(Tabs.description)}
                >
                    Product Description
                </li>
                <li
                    className={`product-tabs__tab ${activeTab === Tabs.reviews ? "product-tabs__tab--active" : ""}`}
                    onClick={() => setActiveTab(Tabs.reviews)}
                >
                    Reviews({reviews.length})
                </li>
            </ul>
            <div className="product-tabs__tab-content">
                {activeTab === Tabs.description && <TabDescription description={description} />}
                {activeTab === Tabs.reviews && <TabReviews reviews={reviews} />}
            </div>
        </div>
    );
}