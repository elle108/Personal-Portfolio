import { useEffect, useState } from "react";

// Embeds an interactive chart page in an iframe. Charts in public/candy/ post their
// height so the frame grows to fit them; anything else uses the starting height.
// `minWidth` keeps fixed-size charts (like Google Sheets) readable by scrolling sideways on phones.
function ChartFrame({ src, name, title, height = 520, minWidth }) {
  const [frameHeight, setFrameHeight] = useState(height);

  useEffect(() => {
    if (!name) return;
    const onMessage = (event) => {
      if (event.data?.candyChart === name && event.data.height) {
        setFrameHeight(event.data.height + 8);
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [name]);

  return (
    // Wider than the text column on large screens so side-by-side charts and legends fit
    <div className="my-8 overflow-x-auto rounded-3xl border border-line bg-paper p-2 shadow-card sm:p-4 lg:-mx-24">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        style={{ height: frameHeight, minWidth }}
        className="block w-full border-0"
      />
    </div>
  );
}

export default ChartFrame;
