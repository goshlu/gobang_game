"use client";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Player } from './types';

interface VictoryOverlayProps {
  winner: Player;
  onPlayAgain: () => void;
}

export function VictoryOverlay({ winner, onPlayAgain }: VictoryOverlayProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-lg z-10">
      <Card className="p-6 text-center">
        <h3 className="text-2xl font-bold mb-4">
          {winner === 'black' ? "Black" : "White"} Wins!
        </h3>
        <Button onClick={onPlayAgain}>Play Again</Button>
      </Card>
    </div>
  );
}