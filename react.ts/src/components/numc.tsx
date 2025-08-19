import { useState, type JSX } from "react";

interface countl { step?: number };

const Counter = ({ step = 1 }: countl): JSX.Element => {
    const [count, setc] = useState<number>(0);

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => setc(count + step)}>+{step}</button>
            <button onClick={() => setc(count - step)}>-{step}</button>
        </div>
    )
}

export default Counter;