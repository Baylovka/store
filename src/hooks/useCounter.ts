import { useState } from 'react';

const useCounter = (initialValue: number = 1) => {
    const [count, setCount] = useState<number>(initialValue);

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => (count > 1) && setCount((prev) => prev - 1);

    return { count, increment, decrement };
};

export default useCounter;