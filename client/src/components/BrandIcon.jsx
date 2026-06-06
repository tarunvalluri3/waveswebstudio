export default function BrandIcon({ icon, className = "", color, title }) {
  if (!icon) {
    return null;
  }

  const fill = color ?? `#${icon.hex}`;

  return (
    <svg
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      viewBox="0 0 24 24"
      className={className}
      fill={fill}
    >
      {title ? <title>{title}</title> : null}
      <path d={icon.path} />
    </svg>
  );
}
