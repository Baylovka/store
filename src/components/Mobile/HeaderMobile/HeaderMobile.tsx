import Icon from "@/components/Icon";
import Input from "@/components/Input";

export default function HeaderMobile() {
    return (
        <header className="header-mobile">
            <div className="container">
                <div className="header-mobile__container">
                    <Input
                        className="header-mobile__input"
                        icon={{ id: "search", width: 22, height: 22 }}
                        name="search"
                        placeholder="Find your plants"
                    />
                    <button className="button header-mobile__button">
                        <Icon id="filter" width={16} height={16}></Icon>
                    </button>
                </div>
            </div>
        </header>
    );
}