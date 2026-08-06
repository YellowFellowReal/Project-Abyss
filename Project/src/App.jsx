/* App.jsx
  - This is the main component of the Scorepedia application.
*/

// Imports
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Games from './pages/Games'
import Social from './pages/Social'
import Settings from './pages/Settings'
import SecretSettings from './pages/Settings-Secret.jsx'

// COMPONENT: App
// - The main application component that sets up routing and rendering.
function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', minHeight: '100vh', background: '#0b1220', color: '#e2e8f0' }}>
        <NavBar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

function AppRoutes() {
  const location = useLocation()
  const mainStyle = {
    flex: 1,
    padding: '2rem',
    maxWidth: '100%',
    minHeight: '100vh',
    boxSizing: 'border-box',
  }

  return (
    <main style={mainStyle}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/social" element={<Social />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/secret" element={<SecretSettings />} />
      </Routes>
    </main>
  )
}

export default App
