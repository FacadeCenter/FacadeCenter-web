export default function Loading() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-black">
            <div className="relative h-16 w-16">
                <div className="absolute inset-0 animate-spin rounded-full border-4 border-white/20"></div>
                <div className="absolute inset-0 animate-spin rounded-full border-t-4 border-purple-500"></div>
            </div>
        </div>
    );
}
