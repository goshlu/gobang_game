"use client";

import { Card } from '@/components/ui/card';
import { Board } from './gomoku/board';
import { GameControls } from './gomoku/game-controls';
import { VictoryOverlay } from './gomoku/victory-overlay';
import { useGameLogic } from './gomoku/use-game-logic';

export default function GomokuGame() {
  const {
    board,
    currentPlayer,
    winner,
    handleMove,
    resetGame,
  } = useGameLogic();

  return (
    <div className="flex flex-col items-center gap-6">
      <Card className="p-6 bg-white/90 dark:bg-neutral-900/90 backdrop-blur">
        <GameControls
          currentPlayer={currentPlayer}
          onReset={resetGame}
        />

        <div className="relative">
          {winner && (
            <VictoryOverlay
              winner={winner}
              onPlayAgain={resetGame}
            />
          )}

          <Board
            board={board}
            onCellClick={handleMove}
            disabled={!!winner}
          />
        </div>
      </Card>
    </div>
  );
}