import { ReactNode } from "react";
import Icon from "./Icon";

interface ButtonProps {
    iconId?: string;
    className?: string;
    children: ReactNode;
};

export default function Button({ iconId, className, children }: ButtonProps) {
    return (
        <button className={`button ${className}`}>
            {iconId && <Icon id={iconId} width={16} height={16} />}
            {children}
        </button>
    );
}