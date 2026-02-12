"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex h-[100vh] flex-col items-center justify-center bg-black text-white gap-6">
            <div className="flex flex-col items-center gap-2">
                <AlertCircle className="w-16 h-16 text-red-500" />
                <h2 className="text-3xl font-bold">Something went wrong!</h2>
                <p className="text-gray-400">
                    We apologize for the inconvenience. Please try again.
                </p>
            </div>
            <div className="flex gap-4">
                <Button onClick={() => reset()} variant="secondary">
                    Try again
                </Button>
                <Button
                    onClick={() => (window.location.href = "/")}
                    variant="outline"
                    className="text-black bg-white hover:bg-gray-200 border-none"
                >
                    Go Home
                </Button>
            </div>
        </div>
    );
}
