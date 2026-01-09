import { cn } from "@/lib/utils";

export const colorOptions = [
  { name: "Black", value: "#1a1a1a", className: "bg-[#1a1a1a]" },
  { name: "White", value: "#f5f5f5", className: "bg-[#f5f5f5] border-gray-300" },
  { name: "Blue", value: "#2563eb", className: "bg-[#2563eb]" },
  { name: "Gray", value: "#6b7280", className: "bg-[#6b7280]" },
];

interface ColorVariantsProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
  size?: "sm" | "md";
}

export function ColorVariants({ selectedColor, onColorChange, size = "md" }: ColorVariantsProps) {
  const sizeClasses = size === "sm" ? "h-5 w-5" : "h-8 w-8";
  const ringOffset = size === "sm" ? "ring-offset-1" : "ring-offset-2";

  return (
    <div className="flex items-center gap-2">
      {colorOptions.map((color) => (
        <button
          key={color.name}
          onClick={() => onColorChange(color.name)}
          className={cn(
            sizeClasses,
            "rounded-full border-2 transition-all duration-200 hover:scale-110",
            color.className,
            selectedColor === color.name
              ? `ring-2 ring-primary ${ringOffset}`
              : "border-border"
          )}
          title={color.name}
          aria-label={`Select ${color.name} color`}
        />
      ))}
    </div>
  );
}

interface ColorBadgeProps {
  color: string;
}

export function ColorBadge({ color }: ColorBadgeProps) {
  const colorOption = colorOptions.find((c) => c.name === color);
  if (!colorOption) return null;

  return (
    <span
      className={cn(
        "inline-block h-4 w-4 rounded-full border",
        colorOption.className
      )}
      title={color}
    />
  );
}
