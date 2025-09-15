import type { JSX } from "react";

interface User {
    name: string;
    id: number;
    email?: string
}

const Details = ({ user }: { user: User }): JSX.Element => {
    return (
        <div>
            <h1>hello {user.name}</h1>
            <h1>{user.id}</h1>
        </div>
    )
};

export default Details;