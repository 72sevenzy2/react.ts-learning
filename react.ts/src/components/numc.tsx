import { useState } from "react";

interface countprops { step?: number };

const Counter = ({ step = 1 }: countprops) => {
    const [count, setc] = useState<number>(0);

    return (
        <>
            <p>count: {count}</p>
            <button onClick={() => setc(count + step)}>+{step}</button>
            <button onClick={() => setc(count - step)}>-{step}</button>
        </>
    )
}

export default Counter;