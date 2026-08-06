// #region | FILE: NavBar.jsx
//
// - Vertical navigation sidebar for Scorepedia.
// - Displays page buttons in a left-side panel.
// - Uses active route styling for the current page.
// #endregion

// ==============
// IMPORTS
// ==============
import { NavLink } from 'react-router-dom'

// ==============
// GLOBALS
// ==============
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Games', path: '/games' },
  { label: 'Social', path: '/social' },
  { label: 'Settings', path: '/settings' },
]

const sidebarStyle = {
  width: '18rem',
  minHeight: '100vh',
  padding: '2rem 1.5rem 2rem 0',
  background: '#0f172a',
  borderRight: '1px solid #16202b',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}

const logoStyle = {
  color: '#f8fafc',
  fontSize: '1.25rem',
  fontWeight: 800,
  letterSpacing: '-0.05em',
  margin: 0,
}

const navListStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.85rem',
}

const linkBaseStyle = {
  width: '80%',
  display: 'inline-flex',
  alignItems: 'center',
  padding: '1rem 1.1rem',
  borderRadius: '1rem',
  textDecoration: 'none',
  fontSize: '0.95rem',
  fontWeight: 600,
  color: '#cbd5e1',
  background: '#111827',
  border: '1px solid transparent',
  transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease',
}

const activeLinkStyle = {
  ...linkBaseStyle,
  color: '#f8fafc',
  background: '#1f2937',
  borderColor: '#2c3b5d',
}

const inactiveLinkStyle = {
  ...linkBaseStyle,
  color: '#94a3b8',
}

// ==============
// COMPONENT
// ==============
function NavBar() {
  return (
    <aside style={sidebarStyle}>
      <div>
        <h1 style={logoStyle}>SCOREPEDIA</h1>
      </div>
      <nav style={navListStyle}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) =>
              isActive ? activeLinkStyle : inactiveLinkStyle
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default NavBar
