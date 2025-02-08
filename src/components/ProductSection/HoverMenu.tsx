import Icon from "../Icon";

export default function HoverMenu() {
    return (
        <div className="hover-menu">
            <ul className="hover-menu__container">
                <li className="hover-menu__item">
                    <Icon id="cart" width={20} height={20} />
                </li>
                <li className="hover-menu__item">
                    <Icon id="heart" width={20} height={20} />
                </li>
                <li className="hover-menu__item">
                    <Icon id="search" width={20} height={20} />
                </li>
            </ul>
        </div>
    );
}