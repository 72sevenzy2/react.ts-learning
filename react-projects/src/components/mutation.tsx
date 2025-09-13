import type { JSX } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";

interface Todo { id: number, title: string }

const queryClient = useQueryClient();

const { data: todos } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: async (): Promise<Todo[]> => (await axios.get("/api/todos")).data
});

const addtodo = useMutation({
    mutationFn: (Newtodo: { title: string }) => axios.post("/api/todos", Newtodo),
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["todos"] });
    }
});

const MutateApp = (): JSX.Element => {
    return (
        <div>
            <button onClick={() => addtodo.mutate({ title: "hello" })}>add todo</button>
            <ul>
                {todos?.map(todo =>
                    <li key={todo.id}>{todo.title}</li>
                )}
            </ul>
        </div>
    )
}

export default MutateApp;