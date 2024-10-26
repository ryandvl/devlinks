import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [active, setActive] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  useEffect(() => {
    setActive(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    document.documentElement.classList[active ? "add" : "remove"]("dark");
  }, [active]);

  function handleThemeSwitcher() {
    if (cooldown) return;

    setCooldown(true);

    setActive(!active);

    setTimeout(() => {
      setCooldown(false);
    }, 500);
  }

  return (
    <div onClick={handleThemeSwitcher} className="relative w-16 m-1 mx-auto">
      <button className="size-8 dark:bg-moon-stars bg-sun bg-no-repeat bg-white bg-center border-none rounded-full absolute top-[-4px] left-0 z-[1] translate-y-button dark:animate-slide-back animate-slide-in hover:outline outline-8 outline-white/20" />
      <span className="block w-16 h-6 bg-white/50 border border-solid border-white/50 backdrop-blur-sm rounded-full" />
    </div>
  );
}
