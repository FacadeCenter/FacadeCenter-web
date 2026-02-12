import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex h-[100vh] flex-col items-center justify-center bg-black text-white">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
                404
            </h1>
            <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
            <p className="mt-2 text-gray-400 max-w-md text-center">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link href="/" className="mt-8">
                <Button variant="secondary" size="lg">
                    Go Back Home
                </Button>
            </Link>
        </div>
    );
}
