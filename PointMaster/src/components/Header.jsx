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
  return (
    <header className="w-full border-b border-gray-200 bg-white px-6 py-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">

        <span className="text-xl font-bold tracking-tight text-gray-900">
          Point Master
        </span>

        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-sm font-medium text-gray-900'
                  : 'text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors'
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