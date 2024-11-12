"use client";

import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';
import { Player } from './types';
import { cn } from '@/lib/utils';

interface GameControlsProps {
  currentPlayer: Player;
  onReset: () => void;
}

export function GameControls({ currentPlayer, onReset }: GameControlsProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className={cn(
            "w-4 h-4 rounded-full",
            currentPlayer === 'black' ? "bg-neutral-950" : "bg-white border-2 border-neutral-950"
          )} />
          <span className="font-medium">
            {currentPlayer === 'black' ? "Black's Turn" : "White's Turn"}
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={onReset}
        className="gap-2"
      >
        <RotateCcw className="w-4 h-4" />
        Reset Game
      </Button>
    </div>
  );
}