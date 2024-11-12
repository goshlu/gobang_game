import GomokuGame from '@/components/gomoku-game';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-neutral-800 dark:text-neutral-100">
          Gomoku (五子棋)
        </h1>
        <GomokuGame />
      </div>
    </main>
  );
}