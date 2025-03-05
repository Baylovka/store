'use client'

import { Dispatch, ReactNode, SetStateAction } from "react";
import ButtonIcon from "./ButtonIcon";

interface ModalProps {
    children: ReactNode;
    isHidden: boolean;
    setIsHidden: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ children, isHidden, setIsHidden }: ModalProps) {
    return (
        <div className={`modal ${isHidden ? "is-hidden" : ""}`}>
            <div className="modal__container">
                <ButtonIcon
                    iconId="close"
                    width={18}
                    height={18}
                    onClick={() => setIsHidden(true)}
                    className="modal__button-close"
                />
                {children}
            </div>
        </div>
    );
}