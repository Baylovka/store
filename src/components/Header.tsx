'use client'

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import CartIcon from "./CartIcon";
import ButtonIcon from "./ButtonIcon";
import Modal from "./Modal";
import Auth from "./Auth/Auth";
import { useState } from "react";
import useBodyClass from "@/hooks/useBodyClass";

export default function Header() {
    const [isHiddenModal, setIsHiddenModal] = useState<boolean>(true);
    useBodyClass("scroll-disabled", !isHiddenModal);

    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <Link href={'/'}>
                        <Image className="header__logo" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.svg`} width={150} height={34} alt="logo" />
                    </Link>
                    <nav className="header__nav">
                        <ul className="header__menu">
                            <li>
                                <Link href={'/'} className="link header__link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className="link header__link">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className="link header__link">
                                    Plant Care
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className="link header__link">
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__utility-bar">
                        <ButtonIcon iconId="search" width={24} height={24} />
                        <CartIcon />
                        <Button iconId="login" onClick={() => setIsHiddenModal(false)}>login</Button>
                    </div>
                </div>
            </div>
            <Modal isHidden={isHiddenModal} setIsHidden={setIsHiddenModal}>
                <Auth />
            </Modal>
        </header>
    );
}