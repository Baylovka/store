import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Cart from "./Cart";
import ButtonIcon from "./ButtonIcon";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <Link href={'/'} className="header__logo">
                        <Image src="/logo.svg" width={150} height={34} alt="logo" />
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
                        <ButtonIcon iconId="search" />
                        <Cart />
                        <Button iconId="login">login</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}