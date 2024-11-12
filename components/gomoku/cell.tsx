"use client";

import { cn } from '@/lib/utils';
import { Player } from './types';

interface CellProps {
  value: Player | null;
  onClick: () => void;
  disabled: boolean;
}

export function Cell({ value, onClick, disabled }: CellProps) {
  return (
    <button
      className={cn(
        "w-8 h-8 bg-amber-50 dark:bg-neutral-800 flex items-center justify-center",
        "hover:bg-amber-100 dark:hover:bg-neutral-700 transition-colors",
        "relative"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {value && (
        <div className={cn(
          "w-7 h-7 rounded-full absolute",
          "transform transition-all duration-200 ease-out",
          "animate-in zoom-in-50",
          value === 'black' ? "bg-neutral-950" : "bg-white border-2 border-neutral-950"
        )} />
      )}
    </button>
  );
}