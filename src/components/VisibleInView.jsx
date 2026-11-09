import { useState, useEffect } from 'react';

function useVisibleInView(ref, { threshold = 0.1, rootMargin = '0px', root = null, once = false } = {}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && once) observer.disconnect();
      },
      { threshold, rootMargin, root }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, root, once]);

  return isVisible;
}

export default useVisibleInView;