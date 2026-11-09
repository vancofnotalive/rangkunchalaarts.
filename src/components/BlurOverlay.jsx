import { useBlur } from "./BlurContext";

export default function BlurOverlay() {
  const { blurId } = useBlur();
if (blurId)
  document.documentElement.classList.add("_blur--active")
else 
  document.documentElement.classList.remove("_blur--active")
  return (
    <div
      className={blurId ? "blur-overlay blur-overlay--open" : "blur-overlay"}

    />
  );
}