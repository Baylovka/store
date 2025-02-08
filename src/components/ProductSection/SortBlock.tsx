export default function SortBlock() {
    return (
        <div className="sort-block">
            <ul className="sort-block__list-tab">
                <li className="sort-block__item-tab sort-block__item-tab--active link">All Plants</li>
                <li className="sort-block__item-tab link">New Arrivals</li>
                <li className="sort-block__item-tab link">Sale</li>
            </ul>
            <div className="sort-block__sorting">
                <label className="sort-block__label">Short by:</label>
                <select className="sort-block__select sort-block__select--default">
                    <option>Default sorting</option>
                    <option>Popular</option>
                    <option>New first</option>
                    <option>Old first</option>
                </select>
            </div>
        </div>
    );
}