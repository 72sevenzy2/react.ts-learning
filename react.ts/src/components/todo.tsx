import React, { useState, type JSX } from "react";
import submitconfig from "../config/submit";

interface Todo { text: string; id: number };

const Todoapp = (): JSX.Element => {
    const [args, setter] = useState<string>("");
    const [int, setint] = useState<Todo[]>([]);

    const btnsub: string = "initialbutton";

    const handledelete = (id: number) => { setint(int.filter(todo => todo.id !== id)); }

    const handleadd = () => {
        if (args.trim() !== "") {
            return setint([...int, { text: args, id: Date.now() }]);
        } setter("");
    }

    return (
        <div>
            <input type="text" value={args} onChange={(event) => setter(event.target.value)}
                onKeyDown={(event: React.KeyboardEvent) => { submitconfig(event, btnsub) }} />
            <button id={btnsub} onClick={handleadd}>Add</button>

            <ul>
                {int.map(todo =>
                    <li key={todo.id}>{todo.text}
                        <button onClick={() => handledelete(todo.id)}></button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Todoapp;