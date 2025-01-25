import { ReactNode } from "react";
import Icon from "./Icon";

interface ButtonProps {
    iconId?: string;
    children: ReactNode
};

export default function Button({ iconId, children }: ButtonProps) {
    return (
        <button className="button">
            {iconId && <Icon id={iconId} width={16} height={16} />}
            {children}
        </button>
    );
}