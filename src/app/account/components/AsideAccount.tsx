'use client'

import ButtonIcon from '@/components/ButtonIcon';
import Icon from '@/components/Icon';
import useBodyClass from '@/hooks/useBodyClass';
import { useWindowSize } from '@/hooks/useWindowsSize';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

type IconVariant = "fill" | "stroke";

const MENU = [
    { key: "personal", label: "Personal Info", iconId: "user", iconVariant: "fill" },
    { key: "address", label: "Address", iconId: "location", iconVariant: "fill" },
    { key: "orders", label: "Orders", iconId: "cart", iconVariant: "fill" },
    { key: "wishlist", label: "Wishlist", iconId: "heart", iconVariant: "fill" },
    { key: "notifications", label: "Notifications", iconId: "message", iconVariant: "fill" },
];

export default function AsideAccount() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const params = useParams();
    const { widthWindow } = useWindowSize();
    useBodyClass("scroll-disabled", isOpen && (widthWindow < 768));
    const section = params?.section || "personal";

    const sectionIndex = MENU.find((m) => m.key === section);

    const toggleAside = () => setIsOpen(prev => !prev);
    return (
        <>
            <div className='aside-account__mobile-label' onClick={toggleAside}>
                <Icon className='aside-account__link-icon' id={sectionIndex?.iconId as string} width={18} height={18} />
                {sectionIndex?.label}
                <Icon className='aside-account__link-icon' id='down-arrow' width={18} height={18} />
            </div>
            <aside className={`account-page__aside aside-account 
                ${isOpen || (widthWindow > 768) ?
                    'aside-account--open' :
                    'aside-account--closed'}`
            }>
                <h2 className='aside-account__title'>My Account</h2>
                <ul className='aside-account__list'>
                    {MENU.map((m) => (
                        <li
                            key={m.key}
                            className={`aside-account__item ${section === m.key ? "aside-account__item--active" : ""}`}
                            onClick={() => {
                                if (widthWindow < 768) {
                                    setIsOpen(false);
                                }
                            }}
                        >
                            <Link href={`/account/${m.key}`} className='aside-account__link'>
                                <span className='aside-account__link-plug'></span>
                                <Icon className='aside-account__link-icon' id={m.iconId} width={18} height={18} variantIcon={m.iconVariant as IconVariant} />
                                <span className='aside-account__link-text'>{m.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <hr className='aside-account__decor-line' />
                <button className='aside-account__logout'>
                    <Icon className='aside-account__logout-icon' id='login' width={18} height={18} />
                    <span className='aside-account__logout-text'>Logout</span>
                </button>
                <ButtonIcon onClick={toggleAside} className='aside-account__mobile-btn-close' iconId='close' width={24} height={24} />
            </aside>
        </>
    );
}