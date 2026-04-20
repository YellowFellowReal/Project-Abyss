// GameCard.jsx
// Displays a summary of a single game

function GameCard({ game }) {
  const isActive = game.status === 'active'

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3">

      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">{game.name}</h2>
          <p className="text-sm text-gray-500">{game.type}</p>
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
          isActive
            ? 'bg-green-100 text-green-700'
            : 'bg-gray-100 text-gray-500'
        }`}>
          {isActive ? 'Active' : 'Completed'}
        </span>
      </div>

      <div className="text-sm text-gray-500">
        {new Date(game.date).toLocaleDateString('en-US', {
          month: 'long', day: 'numeric', year: 'numeric'
        })}
      </div>

      <div className="flex flex-wrap gap-2">
        {game.players.map((player) => (
          <span
            key={player}
            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
          >
            {player}
          </span>
        ))}
      </div>

      <button className="mt-1 w-full text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 transition-colors rounded-lg py-2">
        View Game
      </button>

    </div>
  )
}

export default GameCard