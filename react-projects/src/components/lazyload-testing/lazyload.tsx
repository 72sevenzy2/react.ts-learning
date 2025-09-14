import type { JSX } from "react";
import { Suspense, lazy, useState } from "react";

const Profile = lazy(() => import("./profile"));
const Desc = lazy(() => import("./desc"));

function preloadprofile() {
    return import("./profile");
}

function preloaddesc() {
    return import("./desc");
}

const Lazyapp = (): JSX.Element => {
    const [int, args] = useState<"desc" | "profile">("desc");

    return (
        <div>
            <button onMouseEnter={preloadprofile} onClick={() => args("profile")}>profile</button>
            <button onMouseEnter={preloaddesc} onClick={() => args("desc")}>desc</button>

            <Suspense fallback={<p>Loading...</p>}>
                {int === "desc" ? <Desc></Desc> : <Profile></Profile>}
            </Suspense>
        </div>
    )
}

export default Lazyapp;