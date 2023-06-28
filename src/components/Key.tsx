import { Accessor, Signal, createEffect, createMemo } from "solid-js";
import { Button } from "./Button";

export interface KeyProps {
  label: string;
  width: number;
  pressed: Accessor<boolean>;
  onClick?: () => void;
}

export function Key({ label, width, onClick, pressed }: KeyProps) {
  if (label === "Win" && navigator.platform === "MacIntel") {
    label = "⌘";
  }

  return (
    <div class="px-0.5" style={{ width: `calc(3.5rem * ${width})` }}>
      <Button
        onClick={onClick}
        class={`text-black dark:text-white text-sm w-full h-14 border-2 rounded-md border-b-4 flex items-center justify-center`}
        classList={{
          "bg-[#f0f0f0] border-[#c0c0c0] dark:bg-neutral-800 dark:border-neutral-700":
            pressed(),
          "bg-white border-stone-300 dark:bg-neutral-900 dark:border-neutral-800":
            !pressed(),
        }}
      >
        <span>{label}</span>
      </Button>
    </div>
  );
}
