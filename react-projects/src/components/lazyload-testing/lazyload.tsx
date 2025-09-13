import type { JSX } from "react";

import { useState, Suspense, lazy } from "react";

const Profile = lazy(() => import("./profile"));
const Desc = lazy(() => import("./desc"));

const Lazyapp = (): JSX.Element => {
    const [int, args] = useState<"desc" | "profile">("desc");

    return (
        <div>
            <button onClick={() => args("desc")}>Description</button>
            <button onClick={() => args("profile")}>Profile</button>


            <Suspense fallback={<p>Loading...</p>}>
                {int === "desc" ? <Desc></Desc> : <Profile></Profile>}
            </Suspense>
        </div>
    )
}

export default Lazyapp;