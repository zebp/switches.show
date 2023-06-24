import { createSignal, onMount } from "solid-js";
import { Key } from "~/components/Key";
import { layout } from "../layout";
import { LightmodeToggle } from "~/components/LightmodeButton";
import { aliases } from "~/aliases";

function createKey(item: string | [string, number], pressed: Set<string>) {
  let label: string;
  let width = 1;

  if (Array.isArray(item)) {
    label = item[0];
    width = item[1];
  } else {
    label = item;
  }

  const isPressed = pressed.has(label.toLowerCase()) || label === "Fn";
  return <Key label={label} width={width} pressed={isPressed} />;
}

export default function Home() {
  const [pressed, setStore] = createSignal<Set<string>>(new Set());

  onMount(() => {
    window.addEventListener(
      "keydown",
      function (event) {
        const key = event.keyCode == 32 ? "space" : event.key.toLowerCase();
        const potentialAliases =
          aliases[key]?.map((alias) => alias.toLowerCase()) ?? [];

        setStore(new Set([...pressed(), key, ...potentialAliases]));

        event.preventDefault();
      },
      true
    );
  });

  return (
    <div class="flex flex-col justify-evenly p-16 bg-stone-200 dark:bg-black w-screen h-screen">
      <main class="flex items-center justify-center">
        <div class="flex flex-col gap-1">
          {layout.map((row) => (
            <div class="flex">
              {row.map((label) => createKey(label, pressed()))}
            </div>
          ))}
        </div>
      </main>
      <footer class="flex gap-1 items-center justify-center">
        <LightmodeToggle />
      </footer>
    </div>
  );
}
