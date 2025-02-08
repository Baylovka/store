type PaginationItemProps = {
    page: number | string;
    isActive: boolean;
    onChange: () => void;
}

export default function PaginationItem({ page, isActive, onChange }: PaginationItemProps) {
    if (page === '...') {
        return (
            <div className="pagination__field pagination__field--inactive">...</div>
        )
    }
    
    return (
        <div className="pagination__field">
            <input
                className="pagination__input"
                type="radio"
                id={page.toString()}
                name="pagination"
                value={page}
                checked={isActive}
                onChange={onChange}
            />
            < label
                className="pagination__label"
                htmlFor={page.toString()}
            >
                {page}
            </label>
        </div >
    );
}