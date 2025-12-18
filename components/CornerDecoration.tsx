interface CornerDecorationProps {
  position: "top-left" | "bottom-right";
  size?: number;
  strokeWidth?: number;
  className?: string;
  color?: string;
}

export default function CornerDecoration({
  position,
  size = 48,
  strokeWidth,
  className = "",
  color = "black",
}: CornerDecorationProps) {
  // Default stroke widths matching the logo
  const defaultStrokeWidth = position === "top-left" ? 2 : 6;
  const finalStrokeWidth = strokeWidth ?? defaultStrokeWidth;

  if (position === "top-left") {
    return (
      <div
        className={`absolute top-0 left-0 ${className}`}
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Vertical line */}
          <path
            d={`M1 ${size}L1 1`}
            stroke={color}
            strokeWidth={finalStrokeWidth}
          />
          {/* Horizontal line */}
          <path
            d={`M0 1L${size} 1`}
            stroke={color}
            strokeWidth={finalStrokeWidth}
          />
        </svg>
      </div>
    );
  }

  // bottom-right
  return (
    <div
      className={`absolute bottom-0 right-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Vertical line */}
        <path
          d={`M${size - 1} 0L${size - 1} ${size}`}
          stroke={color}
          strokeWidth={finalStrokeWidth}
        />
        {/* Horizontal line */}
        <line
          x1={size - 1}
          y1={size}
          x2="0"
          y2={size}
          stroke={color}
          strokeWidth={finalStrokeWidth}
        />
      </svg>
    </div>
  );
}
