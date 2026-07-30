// Games.jsx
// Displays all games and allows creating new ones

function Games() {
  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Games</h1>

      <div className="space-y-4">
        <button className="w-full text-base font-semibold text-white bg-gray-900 hover:bg-gray-700 transition-colors rounded-lg px-5 py-4">
          NEW GAME
        </button>
        <button className="w-full text-base font-semibold text-gray-900 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg px-5 py-4">
          PAST GAMES
        </button>
      </div>
    </div>
  )
}

export default Games