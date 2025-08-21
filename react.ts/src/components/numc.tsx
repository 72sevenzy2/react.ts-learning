import { useState, useEffect, type JSX } from "react";
import increaseconfig from "./declarations/increase";
import decreaseconfig from "./declarations/decrease";
import resetconfig from "./declarations/reset";

interface countl { step?: number };

const Counter = ({ step = 1 }: countl): JSX.Element => {
    const [count, setc] = useState<number>(0);

    useEffect(() => {
        const handler = (event: KeyboardEvent): void => { increaseconfig(event, "increasebtn"); }
        window.addEventListener("keydown", handler);
        return () => { window.removeEventListener("keydown", handler); }
    }, []);

    useEffect(() => {
        const handler = (event: KeyboardEvent): void => { decreaseconfig(event, "decreasebtn"); }
        window.addEventListener("keydown", handler);
        return () => { window.removeEventListener("keydown", handler); }
    }, []);

    useEffect(() => {
        const handler = (event: KeyboardEvent): void => { resetconfig(event, setc); }
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