import { Icon } from "solid-heroicons";
import { sun } from "solid-heroicons/outline";
import { Button } from "./Button";

export function LightmodeToggle() {
  const clicked = () => {
    if (localStorage.theme == "light") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Button onClick={clicked}>
      <Icon path={sun} class="w-8 h-8 text-black dark:text-white" />
    </Button>
  );
}
