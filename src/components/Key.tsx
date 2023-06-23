export interface KeyProps {
  label: string;
  width: number;
  pressed?: boolean;
}
export function Key({ label, width, pressed = false }: KeyProps) {
  const colors = pressed
    ? "bg-[#f0f0f0] border-[#c0c0c0] dark:bg-neutral-800 dark:border-neutral-700"
    : "bg-white border-stone-300 dark:bg-neutral-900 dark:border-neutral-800";

  return (
    <div class="px-0.5" style={{ width: `calc(3.5rem * ${width})` }}>
      <div
        class={`text-black dark:text-white text-sm h-14 border-2 rounded-md border-b-4 flex items-center justify-center ${colors}`}
      >
        <span>{label}</span>
      </div>
    </div>
  );
}
