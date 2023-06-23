import { Icon } from "solid-heroicons";
import { sun } from "solid-heroicons/outline";

export function LightmodeToggle() {
  const clicked = () => {
    if (localStorage.theme == 'light') {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button onClick={clicked} class="flex bg-white border-stone-300 dark:bg-neutral-800 dark:border-neutral-700 w-14 h-14 border-2 rounded-md border-b-4  items-center justify-center">
        <Icon path={sun} class="w-8 h-8 text-black dark:text-white" />
    </button>
  );
}
