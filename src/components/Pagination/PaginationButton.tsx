import Icon from "../Icon";

type PaginationButtonProps = {
    direction: "prev" | "next",
    onClick: () => void,
    disabled?: boolean
}

export default function PaginationButton({ direction, onClick, disabled }: PaginationButtonProps) {
    return (
        <button
            className={`pagination__button ${direction === "prev" ? "pagination__button--rotate" : ""}`}
            type="button"
            disabled={disabled}
            onClick={onClick}
        >
            <Icon id="arrow-2" width={18} height={18} />
        </button>
    );
}