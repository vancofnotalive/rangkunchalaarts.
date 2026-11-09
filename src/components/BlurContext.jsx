import { createContext, useContext, useState } from "react";

const BlurContext = createContext();

export function BlurProvider({ children }) {
  const [blurId, setBlurId] = useState(null); // null = hidden

  const showBlur = (id) => setBlurId(id);
  const hideBlur = () => setBlurId(null);

  return (
    <BlurContext.Provider value={{ blurId, showBlur, hideBlur }}>
      {children}
    </BlurContext.Provider>
  );
}

export function useBlur() {
  return useContext(BlurContext);
}