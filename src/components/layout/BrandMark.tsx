import { useState } from "react";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/suma-logo.png";

interface BrandMarkProps {
  className?: string;
  alt?: string;
}

export function BrandMark({
  className,
  alt = "Suma Surveillance Tech Logo",
}: BrandMarkProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-border shadow-sm flex items-center justify-center bg-background",
        className
      )}
      aria-label={alt}
    >
      {!error && (
        <img
          src={LOGO_SRC}
          alt={alt}
          className={cn(
            "h-full w-full object-contain p-0.5 transition-opacity duration-200",
            loaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setLoaded(true)}
          onError={() => {
            setError(true);
            setLoaded(false);
          }}
        />
      )}

      {(!loaded || error) && (
        <span className="absolute inset-0 flex items-center justify-center font-bold text-primary">
          SST
        </span>
      )}
    </div>
  );
}
