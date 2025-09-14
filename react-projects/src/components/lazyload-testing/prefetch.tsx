import type { JSX } from "react";
import { Suspense, lazy, useEffect, useState } from "react";

const Profile = lazy(() => import("./profile"));

const Prefetch = (): JSX.Element => {
    const [view, setview] = useState<boolean>(false);

    useEffect(() => {
        import("./profile")
    }, []);

    return (
        <div>
            <button onClick={() => setview(true)}>view profile</button>

            <Suspense fallback={<p>Loading...</p>}>
                {view === true ? <Profile></Profile> : null}
            </Suspense>

        </div>
    );
}

export default Prefetch