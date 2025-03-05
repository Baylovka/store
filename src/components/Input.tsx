'use client'

import { useState } from "react";
import Icon from "./Icon";
import ButtonIcon from "./ButtonIcon";

interface Icon {
    id: string;
    width: number;
    height: number;
}

interface InputProps {
    icon?: Icon;
    className?: string;
    name: string;
    placeholder: string;
    isPassword?: boolean;
}

export default function Input({ icon, className, name, placeholder, isPassword = false }: InputProps) {
    const [isShowPass, setIsShowPass] = useState<boolean>(false);

    return (
        <div className={`input ${className}`}>
            {icon && <Icon className="input__icon" id={icon.id} width={icon.width} height={icon.height} />}
            <input
                className="input__input"
                type={isPassword && !isShowPass ? "password" : "text"}
                name={name}
                placeholder={placeholder}
            />
            {isPassword &&
                <ButtonIcon
                    iconId={isShowPass ? "eye" : "eye-off"}
                    width={20}
                    height={20}
                    className="input__icon input__icon--password"
                    onClick={() => setIsShowPass((prev) => (!prev))}
                />
            }
        </div>
    );
}