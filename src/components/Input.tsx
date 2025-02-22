import Icon from "./Icon";

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
}

export default function Input({ icon, className, name, placeholder }: InputProps) {
    return (
        <div className={`input ${className}`}>
            {icon && <Icon className="input__icon" id={icon.id} width={icon.width} height={icon.height} />}
            <input
                className="input__input"
                type="text"
                name={name}
                placeholder={placeholder}
            />
        </div>
    );
}