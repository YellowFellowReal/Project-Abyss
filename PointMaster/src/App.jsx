/* App.jsx
  - This is the main component of the Point Master application.
*/

//Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Games from './pages/Games'
import Social from './pages/Social'
import Settings from './pages/Settings'
import SecretSettings from './pages/Settings-Secret.jsx'

/* COMPONENT: App
- The main application component that sets up routing and rendering
*/
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/social" element={<Social />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/secret" element={<SecretSettings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App