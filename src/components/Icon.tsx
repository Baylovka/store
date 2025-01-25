interface IconProps {
    className?: string;
    id: string;
    width: number;
    height: number;
}

export default function Icon({ className, id, width, height }: IconProps) {
    return (
        <svg className={className} width={width} height={height}>
            <use href={`/icons.svg#icon-${id}`}></use>
        </svg>
    );
};