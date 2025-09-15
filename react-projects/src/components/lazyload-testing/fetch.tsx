import type { JSX } from "react";
import React, { Suspense, lazy, useState, useEffect, useRef } from "react";
import { QueryClient, useQuery, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

const Details = lazy(() => import("./details"));

interface userId { id: number };

function UserFetcher({ id }: userId) {
    try {
        const { data, isLoading, isError, error } = useQuery({
            queryKey: ["key1", id],
            queryFn: async () => {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                return response.data;
            }
        });

        if (isLoading) { return <p>Loading...</p> }
        if (isError) { return <p>Error: {(error as Error).message}</p> }
        return <Details user={data}></Details>
    }
    catch (error) {
        console.error(error);
    }

}

function preloaduser() {
    return import("./details");
}

const Fetch = (): JSX.Element => {
    const ref = useRef<HTMLDivElement | null>(null);
    const queryClient = new QueryClient();
    const [viewing, setview] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) { setview(true); observer.disconnect(); };
        })
        if (ref.current) { observer.observe(ref.current); }
        return () => { observer.disconnect(); }
    }, []);

    useEffect(() => {
        import("./details");
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <button onMouseEnter={preloaduser} onClick={() => setview(true)}></button>
            </div>

            <div ref={ref}>
                {viewing && (
                    <Suspense fallback={<p>Loading...</p>}>
                        <UserFetcher id={67}></UserFetcher>
                    </Suspense>
                )}
            </div>
        </QueryClientProvider>
    )
};

export default Fetch;