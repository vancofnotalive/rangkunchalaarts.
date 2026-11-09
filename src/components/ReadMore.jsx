import { useState, useRef, useLayoutEffect } from "react";

function ReadMore({
  children,
  lines = 2,
  moreLabel = "Read more",
  lessLabel = "Read less",
}) {
  const text = String(children).trim();

  const [expanded, setExpanded] = useState(false);
  const [shown, setShown] = useState(text);
  const [truncated, setTruncated] = useState(false);

  const wrapRef = useRef(null);
  const measureRef = useRef(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const m = measureRef.current;
    if (!wrap || !m) return;

    let lastWidth = -1;

    const compute = () => {
      const width = wrap.clientWidth;
      if (!width) return;
      lastWidth = width;
      m.style.width = width + "px";

      const cs = getComputedStyle(m);
      const fontSize = parseFloat(cs.fontSize) || 16;
      const lineHeight = parseFloat(cs.lineHeight) || fontSize * 1.2;
      const maxHeight = lineHeight * lines + 1;

      // Writes text (and optionally the button) into the hidden measurer
      const fits = (str, withButton) => {
        m.textContent = "";
        m.appendChild(document.createTextNode(str));
        if (withButton) {
          m.appendChild(document.createTextNode("… "));
          const b = document.createElement("span");
          b.className = "read-more-btn";
          b.textContent = moreLabel;
          m.appendChild(b);
        }
        return m.getBoundingClientRect().height <= maxHeight;
      };

      // 1. Whole text fits: no button needed
      if (fits(text, false)) {
        setTruncated(false);
        setShown(text);
        return;
      }

      // 2. Binary search for the longest text that fits with "… Read more"
      let lo = 0;
      let hi = text.length;
      while (lo < hi) {
        const mid = Math.ceil((lo + hi) / 2);
        if (fits(text.slice(0, mid).trimEnd(), true)) lo = mid;
        else hi = mid - 1;
      }

      // 3. Cut at a word boundary and tidy trailing punctuation
      let cut = text.slice(0, lo);
      if (lo < text.length && !/\s/.test(text[lo])) {
        const idx = cut.search(/\s+\S*$/);
        if (idx > 0) cut = cut.slice(0, idx);
      }
      cut = cut.replace(/[\s,.;:·\-–—]+$/, "");

      setShown(cut);
      setTruncated(true);
    };

    compute();

    // Re-run only when the width changes (avoids loops)
    const observer = new ResizeObserver(() => {
      if (wrap.clientWidth !== lastWidth) compute();
    });
    observer.observe(wrap);

    // Re-run once web fonts finish loading (they change text width)
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(compute);
    }

    return () => observer.disconnect();
  }, [text, lines, moreLabel]);

  return (
    <div className="read-more" ref={wrapRef}>
      <p className="read-more-text">
        {expanded ? text : shown}
        {truncated && (
          <>
            {expanded ? " " : "… "}
            <button
              type="button"
              className="read-more-btn"
              aria-expanded={expanded}
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? lessLabel : moreLabel}
            </button>
          </>
        )}
      </p>

      {/* Hidden copy used only for measuring */}
      <p
        className="read-more-text read-more-measure"
        ref={measureRef}
        aria-hidden="true"
      />
    </div>
  );
}

export default ReadMore;