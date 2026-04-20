// Games.jsx
// Displays all games and allows creating new ones

import { mockGames } from '../data/mockGames'
import GameCard from '../components/GameCard'

function Games() {
  return (
    <div>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Games</h1>
          <p className="text-sm text-gray-500 mt-1">All your games and events</p>
        </div>
        <button className="text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 transition-colors rounded-lg px-4 py-2">
          + New Game
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

    </div>
  )
}

export default Games