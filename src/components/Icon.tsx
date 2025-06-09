interface IconProps {
    className?: string;
    id: string;
    width: number;
    height: number;
    variantIcon?: 'stroke' | 'fill';
}

export default function Icon({ className, id, width, height, variantIcon }: IconProps) {
    return (
        <svg className={className} width={width} height={height} data-variant={variantIcon}>
            <use href={`/icons.svg#icon-${id}`}></use>
        </svg>
    );
};