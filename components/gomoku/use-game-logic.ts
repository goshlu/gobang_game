"use client";

import { useState, useCallback } from 'react';
import { Player, BoardState, BOARD_SIZE } from './types';

export function useGameLogic() {
  const [board, setBoard] = useState<BoardState>(() =>
    Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState<Player>('black');
  const [winner, setWinner] = useState<Player | null>(null);

  const checkWin = useCallback((row: number, col: number, player: Player, board: BoardState) => {
    const directions = [
      [1, 0],   // horizontal
      [0, 1],   // vertical
      [1, 1],   // diagonal
      [1, -1],  // anti-diagonal
    ];

    return directions.some(([dx, dy]) => {
      let count = 1;
      
      // Check forward direction
      for (let i = 1; i < 5; i++) {
        const newRow = row + dx * i;
        const newCol = col + dy * i;
        if (
          newRow < 0 || newRow >= BOARD_SIZE ||
          newCol < 0 || newCol >= BOARD_SIZE ||
          board[newRow][newCol] !== player
        ) break;
        count++;
      }

      // Check backward direction
      for (let i = 1; i < 5; i++) {
        const newRow = row - dx * i;
        const newCol = col - dy * i;
        if (
          newRow < 0 || newRow >= BOARD_SIZE ||
          newCol < 0 || newCol >= BOARD_SIZE ||
          board[newRow][newCol] !== player
        ) break;
        count++;
      }

      return count >= 5;
    });
  }, []);

  const handleMove = useCallback((row: number, col: number) => {
    if (winner || board[row][col]) return;

    const newBoard = board.map(row => [...row]);
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    if (checkWin(row, col, currentPlayer, newBoard)) {
      setWinner(currentPlayer);
    } else {
      setCurrentPlayer(currentPlayer === 'black' ? 'white' : 'black');
    }
  }, [board, currentPlayer, winner, checkWin]);

  const resetGame = useCallback(() => {
    setBoard(Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null)));
    setCurrentPlayer('black');
    setWinner(null);
  }, []);

  return {
    board,
    currentPlayer,
    winner,
    handleMove,
    resetGame,
  };
}