import React, { useState, useReducer, type JSX } from "react";
import submitconfig from "../config/submit";

interface Todo { text: string; id: number; }
interface deltodo { type: "delete"; payload: number }
interface addtodo { type: "add"; payload: string }

type ztodo = deltodo | addtodo;

const reducerfunc = (state: Todo[], action: ztodo): Todo[] => {
    switch (action.type) {
        case "add":
            const newtodo: Todo = { text: action.payload, id: Date.now() };
            return [...state, newtodo];
            break;
        case "delete":
            return state.filter(todo => todo.id !== action.payload);
            break;
        default: return state;
    }
}

const Todoappp = (): JSX.Element => {
    const [args, setter] = useState<string>("");
    const [state, dispatch] = useReducer(reducerfunc, [] as Todo[]);

    const buttonsubmit: string = "initialbutton";

    const handleargs = (event: React.FormEvent<HTMLFormElement>): void => {
        if (args.trim() !== "") {
            dispatch({ type: "add", payload: args }); setter("");
            event.preventDefault(); console.log("rendered task"); // for debugging purposes
        }
    }

    return (
        <>
            <form onSubmit={handleargs}>
                <h1>to do app</h1>
                <input type="text" value={args} onChange={(event) => { setter(event.target.value) }}
                    placeholder="Add a task" aria-label="Add a task" onKeyDown={(event) => submitconfig(event, buttonsubmit)} />
                <button id={buttonsubmit} type="submit">Add</button>
            </form>
            <ul>
                {state.map(todo =>
                    <li key={todo.id}>{todo.text} {" "}
                        <button aria-label="Delete a task" onClick={() => dispatch({ type: "delete", payload: todo.id })}>
                            DEL
                        </button>
                    </li>
                )}
            </ul>
        </>
    )
}

export default Todoappp;