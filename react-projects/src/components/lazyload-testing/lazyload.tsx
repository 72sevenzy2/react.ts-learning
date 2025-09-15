import type { JSX } from "react";
import { Suspense, lazy, useState, useEffect, useRef } from "react";

const Profile = lazy(() => import("./profile2"));
const Desc = lazy(() => import("./desc"));

function preloadprofile() {
    return import("./profile");
}

function preloaddesc() {
    return import("./desc");
}

const Lazyapp = (): JSX.Element => {
    const [int, args] = useState<"desc" | "profile">("desc");
    const [vis, setvis] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setvis(true);
                observer.disconnect();
            }
            if (ref.current) { observer.observe(ref.current); }

            return () => observer.disconnect();
        })
    }, []);

    return (
        <div>
            <button onMouseEnter={preloadprofile} onClick={() => args("profile")}>profile</button>
            <button onMouseEnter={preloaddesc} onClick={() => args("desc")}>desc</button>
            <div ref={ref}>
                <Suspense fallback={<p>Loading...</p>}>
                    {int === "desc" && vis ? <Desc></Desc> : <Profile></Profile>}
                </Suspense>
            </div>
        </div>
    )
}

export default Lazyapp;