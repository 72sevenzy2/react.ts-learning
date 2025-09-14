import type { JSX } from "react";
import React, { Suspense, lazy, useState } from "react";

const Profile = lazy<React.FC<{ name: string }>>(() => import("./profile"));

const Props = (): JSX.Element => {
    const [args, int] = useState<boolean>(false);

    return (
        <div>
            <button onClick={() => { int(true) }}>show prof</button>

            {args && (
                <Suspense fallback={<p>Loading...</p>}>
                    <Profile name="hello"></Profile>
                </Suspense>
            )}
        </div>
    )
};

export default Props;