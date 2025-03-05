import Icon from "./Icon";

interface ButtonIconProps {
    iconId: string;
    width: number;
    height: number;
    onClick?: () => void;
    className?: string;
}

export default function ButtonIcon({ iconId, width, height, onClick, className }: ButtonIconProps) {
    return (
        <button className={`button-icon ${className}`} onClick={onClick} type="button">
            <Icon id={iconId} width={width} height={height} />
        </button>
    );
}