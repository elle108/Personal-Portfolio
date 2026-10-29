// Little decorative SVGs (clouds and sparkles) used around the site

export function Cloud({ className = "", fill = "#fff" }) {
  return (
    <svg viewBox="0 0 120 64" className={className} aria-hidden="true">
      <path
        d="M30 58C16 58 6 50 6 39s9-19 21-19c3-11 13-18 25-18 11 0 21 7 24 17 2-1 5-1 7-1 14 0 25 9 25 21s-10 19-23 19H30z"
        fill={fill}
      />
    </svg>
  );
}

export function Sparkle({ className = "", fill = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 0c.8 6.4 5.6 11.2 12 12-6.4.8-11.2 5.6-12 12-.8-6.4-5.6-11.2-12-12C6.4 11.2 11.2 6.4 12 0z" fill={fill} />
    </svg>
  );
}
