import type { JSX } from "react";
import { lazy, Suspense, useState } from "react";

const Profile = lazy(() => import("./profile"));
const Desc = lazy(() => import("./desc"));

const Lazyapp = (): JSX.Element => {
    const [int, args] = useState<"desc" | "profile">("desc");

    function preloaddesc() {
        return import("./desc");
    }

    function preloadprofile() {
        return import("./profile");
    }

    return (
        <div>
            <button onMouseEnter={preloaddesc} onClick={() => args("desc")}>desc</button>
            <button onMouseEnter={preloadprofile} onClick={() => args("profile")}>profile</button>

            <Suspense fallback={<p>Loading...</p>}>
                {int === "desc" ? <Desc></Desc> : <Profile></Profile>}
            </Suspense>
        </div>
    )
}

export default Lazyapp;