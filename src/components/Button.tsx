import { ReactNode } from "react";
import Icon from "./Icon";

interface ButtonProps {
    iconId?: string;
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
};

export default function Button({ iconId, className, children, onClick }: ButtonProps) {
    return (
        <button className={`button ${className}`} onClick={onClick}>
            {iconId && <Icon id={iconId} width={16} height={16} />}
            {children && children}
        </button>
    );
}