import { Loader2 } from "lucide-react";

export function PageLoader() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-12 w-12 text-primary animate-spin" />
                <p className="text-muted-foreground text-sm">Loading...</p>
            </div>
        </div>
    );
}
