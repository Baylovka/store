interface CounterProps {
    classStyleName: string;
    decrement: () => void;
    increment: () => void;
    count: number;
}

export default function Counter({ classStyleName, decrement, increment, count}: CounterProps) {
    return (
        <div className="counter">
            <button
                className={`counter__button-style counter__button-style--${classStyleName}`}
                onClick={decrement}
            >
                &#45;
            </button>
            <span className={`counter__count-style counter__count-style--${classStyleName}`}>{count}</span>
            <button
                className={`counter__button-style counter__button-style--${classStyleName}`}
                onClick={increment}
            >
                &#43;
            </button>
        </div>
    );
}