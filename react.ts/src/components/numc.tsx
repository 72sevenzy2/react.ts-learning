import { useState, useEffect, type JSX } from "react";
import increaseconfig from "./increase";

interface countl { step?: number };

const Counter = ({ step = 1 }: countl): JSX.Element => {
    const [count, setc] = useState<number>(0);

    useEffect(() => {
        const handler = (event: KeyboardEvent) => { increaseconfig(event, "increasebtn"); }
        window.addEventListener("keydown", handler);
        return () => { window.removeEventListener("keydown", handler); }
    }, []);

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => setc(count + step)} id="increasebtn">+{step}</button>
            <button onClick={() => setc(count - step)} id="decreasebtn">-{step}</button>
        </div>
    )
}

export default Counter;