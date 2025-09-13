import type { JSX } from "react";

import { useState, Suspense, lazy } from "react";

const Profile = lazy(() => import("./profile"));

const Lazyapp = (): JSX.Element => {
    const [int, args] = useState<boolean>(false);

    return (
        <div>
            <button onClick={() => args(true)}>show</button>

            <Suspense fallback={<p>Loading...</p>}>
                {int && <Profile></Profile>}
            </Suspense>
        </div>
    )
}

export default Lazyapp;