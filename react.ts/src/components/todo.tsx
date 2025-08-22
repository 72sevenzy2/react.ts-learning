import React, { useReducer, useState, type JSX } from "react";
import submitconfig from "../config/submit";

interface Todo { id: number; text: string };

interface deltask { type: "delete"; payload: number };
interface addtask { type: "add"; payload: string };

type todoargs = deltask | addtask;

const reducerfunc = (state: Todo[], action: todoargs): Todo[] => {
    switch (action.type) {
        case "add":
            return [...state, { id: Date.now(), text: action.payload }];
        case "delete":
            return state.filter(todo => todo.id !== action.payload);
        default: return state;
    }
}

const Todoapp = (): JSX.Element => {
    const [args, setter] = useState<string>("");
    const [todos, dispatch] = useReducer(reducerfunc, [] as Todo[]);

    const btnsub: string = "initialbutton";
    return (
        <div>
            <input type="text" value={args} onChange={(event) => setter(event.target.value)}
                onKeyDown={(event: React.KeyboardEvent) => submitconfig(event, btnsub)} />
            <button id={btnsub} onClick={() => {
                if (args.trim()) {
                    dispatch({ type: "add", payload: args }); setter("");
                }
            }
            }>ADD</button>

            <ul>
                {todos.map(todo =>
                    <li key={todo.id}>{todo.text} {" "}
                        <button onClick={() => dispatch({ type: "delete", payload: todo.id })}>DEL</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Todoapp;