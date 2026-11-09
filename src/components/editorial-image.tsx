import type { CSSProperties } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
};

export function EditorialImage({ src, alt, className = "", style, priority = false }: Props) {
  return (
    <div className={`editorial-image ${className}`.trim()} style={style}>
      <img
        src={src}
        alt={alt}
        width={1400}
        height={1000}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </div>
  );
}
