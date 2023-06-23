import { Icon } from "solid-heroicons";
import { documentArrowDown } from "solid-heroicons/outline";
import { JSX } from "solid-js";

export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  children?: JSX.Element | JSX.Element[];
}

export function Button(props: ButtonProps) {
  const classes = `flex gap-1 px-2 bg-white border-stone-300 dark:bg-neutral-900 dark:border-neutral-800 h-14 border-2 rounded-md border-b-4  items-center justify-center ${
    props.class ?? ""
  }`;

  return (
    <button {...props} class={classes}>
      {props.children}
    </button>
  );
}
