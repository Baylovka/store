'use client'
import Icon from "@/components/Icon";
import Link from "next/link";
import { useState } from "react";

const menu = [
    {
        link: "/",
        iconId: "home",
        title: "Home"
    },
    {
        link: "/",
        iconId: "heart",
        title: "Heart"
    },
    {
        link: "/",
        iconId: "search",
        title: "Search"
    },
    {
        link: "/",
        iconId: "mobile-cart",
        title: "Cart"
    },
    {
        link: "/",
        iconId: "mobile-user",
        title: "User"
    }
]

function addIdentifierToClass(activeTab: number, index: number) {
    const preActiveTab = activeTab - 1;
    const postActiveTab = activeTab + 1;

    if (activeTab === index) {
        return ("bottom-nav-menu__item--active");
    } else if ((preActiveTab === index)) {
        return ("bottom-nav-menu__item--pre-active");
    } else if ((postActiveTab === index)) {
        return ("bottom-nav-menu__item--post-active");
    } else {
        return ('');
    }

}

export default function BottomNavMenu() {
    const [activeTab, setActiveTab] = useState<number>(0);
    
    return (
        <nav className="bottom-nav-menu">
            <ul className="bottom-nav-menu__list">
                {menu && menu.map((item, index) => (
                    <li className={`bottom-nav-menu__item ${addIdentifierToClass(activeTab, index)}`}
                        key={index} onClick={() => setActiveTab(index)}
                    >
                        <Link
                            className={`bottom-nav-menu__link ${(activeTab === index) ?
                                "bottom-nav-menu__link--active" :
                                ""
                                }`}
                            href={item.link}
                        >
                            <Icon className="bottom-nav-menu__icon" id={item.iconId} width={20} height={20} />
                        </Link>
                        {(activeTab === index) && <span className="bottom-nav-menu__title">{item.title}</span>}
                    </li>
                ))}
            </ul>
        </nav>
    );
}