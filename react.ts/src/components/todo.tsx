import React, { useState, useReducer, type JSX } from "react";
import submitconfig from "../config/submit";

interface Todo { text: string; id: number; }
interface Addac { type: "add"; payload: string; }
interface Delac { type: "delete"; payload: number; }

type todoaction = Addac | Delac;

const todoreducer = (state: Todo[], action: todoaction): Todo[] => {
    switch (action.type) {
        case "add":
            const newtodo: Todo = { text: action.payload, id: Date.now() };
            return [...state, newtodo];
            break;
        case "delete":
            return state.filter(todo => todo.id !== action.payload);
            break;
        default:
            return state;
    }
}

const Todoapp = (): JSX.Element => {
    const [todos, dispatch] = useReducer(todoreducer, [] as Todo[]);
    const [input, setinput] = useState<string>("");

    const handleadd = (event: React.FormEvent<HTMLFormElement>): void => {
        if (input.trim() !== "") {
            dispatch({ type: "add", payload: input }); setinput("");
            event.preventDefault(); console.log("rendered task");
        }
    }

    return (
        <div>
            <form onSubmit={handleadd}>
                <input type="text" value={input} onChange={(event) => setinput(event.target.value)}
                    placeholder="Add a new task" onKeyDown={(event) => submitconfig(event, "buttonsubmit")} />
                <button type="submit" id="buttonsubmit">Add</button>
            </form>
            <ul>
                {todos.map(todo =>
                    <li key={todo.id}>
                        {todo.text} {" "}
                        <button onClick={() => dispatch({ type: "delete", payload: todo.id })}>DEL</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Todoapp;