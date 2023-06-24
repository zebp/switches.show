import { createMemo, onMount } from "solid-js";
import { ReactiveMap } from "@solid-primitives/map";

import { Key } from "~/components/Key";
import { LightmodeToggle } from "~/components/LightmodeButton";

import { layout } from "../layout";
import { aliases } from "~/aliases";

export default function Home() {
  const pressed = new ReactiveMap<string, boolean>();

  const addPressed = (...keys: string[]) => {
    for (const key of keys) {
      pressed.set(key, true);
    }
  };

  onMount(() => {
    window.addEventListener("keydown", (event) => {
      const key = event.key.toLowerCase();
      const potentialAliases =
        aliases[key]?.map((alias) => alias.toLowerCase()) ?? [];

      addPressed(key, ...potentialAliases);
      event.preventDefault();
    });
  });

  return (
    <div class="flex flex-col justify-evenly p-16 bg-stone-200 dark:bg-black w-screen h-screen">
      <main class="flex items-center justify-center">
        <div class="flex flex-col gap-1">
          {layout.map((row) => (
            <div class="flex">
              {row.map(({ label, width }) => (
                <Key
                  label={label}
                  width={width}
                  pressed={createMemo(
                    () => pressed.get(label.toLowerCase()) ?? false
                  )}
                  onClick={() => addPressed(label.toLowerCase())}
                />
              ))}
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
