import Link from "next/link";

interface Rows {
    name: string,
    count: number,
}

interface FilterListProps {
    children: React.ReactNode,
    rows: Rows[],
}

export default function FilterList({ children, rows }: FilterListProps) {
    return (
        <div className="filter-list">
            <h3 className="filter-list__title">{children}</h3>
            <ul className="filter-list__list">
                {rows && rows.map((row, index) => (
                    <li className="filter-list__row" key={index}>
                        <Link className="filter-list__row-name" href={'/'}>{row.name}</Link>
                        <p className="filter-list__row-count">({row.count})</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}