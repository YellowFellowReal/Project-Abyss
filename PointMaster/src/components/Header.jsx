/* Header.jsx
- Component for the header of the application, including navigation links and branding.
*/

// Imports
import { NavLink } from 'react-router-dom'

/* Variables
- navItems: An array of strings representing the navigation items to be displayed in the header.
*/
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Games', path: '/games' },
  { label: 'Social', path: '/social' },
  { label: 'Settings', path: '/settings' },
]


/* COMPONENT: Header
- Renders the header section of the application with the title and navigation links.
*/
function Header() {

  const headerStyle = {
    width: '100%',
    borderBottom: '1px solid #002437',
    backgroundColor: '#05c1ff',
    padding: '1rem 1.5rem',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
  }

  const containerStyle = {
    maxWidth: '72rem',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '0.75rem',
    textAlign: 'left',
  }

  const titleStyle = {
    fontSize: '1.125rem',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    color: '#000000',
    margin: 0,
  }

  const separatorStyle = {
    color: '#000000',
    fontWeight: 600,
  }

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  }

  /* Link Styles */
  const linkStyle = {
    color: '#0000007c',
    display: 'inline-flex',
    borderRadius: '9999px',
    backgroundColor: 'rgb(228, 226, 226)',
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    textDecoration: 'none',
    transition: 'background-color 0.2s ease, color 0.2s ease',
  }

    /* Active Styles */
  const activeLinkStyle = {
    ...linkStyle,
    color: '#000000',
    backgroundColor: 'rgb(23, 148, 180)',
    fontWeight: 600,
    boxShadow: '0 1px 2px rgba(15, 23, 42, 0.08)',
  }

  /* Inactive Styles */
  const inactiveLinkStyle = {
    ...linkStyle,
    color: '#0000007c',
  }

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <span style={titleStyle}>POINT MASTER</span>
        <span style={separatorStyle}>|</span>
        <nav style={navStyle}>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              style={({ isActive }) =>
                isActive ? activeLinkStyle : inactiveLinkStyle
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header