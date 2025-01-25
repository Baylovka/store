import Icon from "./Icon";

interface ButtonIconProps {
    iconId: string;
}

export default function ButtonIcon({ iconId }: ButtonIconProps) {
    return (
        <button className="button-icon">
            <Icon id={iconId} width={24} height={24} />
        </button>
    );
}