"use client";

import { useEffect } from "react";

export default function Error({error, reset} : { error: Error & { digest?: string }
    reset: () => void}) {
    useEffect(() => {
        console.log(error);
    }, [error]);
    return (
        <section 
        className="flex flex-col justify-center items-center pt-10">
            <h1 
            className="text-3xl mb-4">Something went wrong.</h1>
            <button 
            className=" text-blue-500"
            onClick={() => reset()}>Try again</button>
        </section>
    )
}