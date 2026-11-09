
import { useEffect } from 'react';

function useBackgroundColor(color  = "rgb(255, 255, 255)") {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.getPropertyValue('--main-bg');

    root.style.setProperty('--main-bg', color);

    return () => root.style.setProperty('--main-bg', previous); // restore on unmount
  }, [color]);
}

export default useBackgroundColor;