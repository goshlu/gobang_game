"use client";

import { cn } from '@/lib/utils';
import { Cell } from './cell';
import { Player } from './types';

interface BoardProps {
  board: (Player | null)[][];
  onCellClick: (row: number, col: number) => void;
  disabled: boolean;
}

export function Board({ board, onCellClick, disabled }: BoardProps) {
  return (
    <div className="grid grid-cols-15 gap-px bg-neutral-300 dark:bg-neutral-700 p-px rounded-lg">
      {board.map((row, rowIndex) => (
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            value={cell}
            onClick={() => onCellClick(rowIndex, colIndex)}
            disabled={disabled || !!cell}
          />
        ))
      ))}
    </div>
  );
}