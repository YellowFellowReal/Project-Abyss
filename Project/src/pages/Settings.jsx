// #region | FILE: Settings.jsx
//
// - Settings overview page for Scorepedia.
// - Contains navigation and feature preview cards.
// - Links to the hidden Secret Settings section.
// #endregion

// ==============
// IMPORTS
// ==============
import { Link } from 'react-router-dom'

// ==============
// FUNCTIONS
// ==============

function Settings() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '2rem',
        width: '100%',
      }}
    >
      <section style={{ width: '100%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f8fafc', textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
          Settings
        </h1>
        <p style={{ marginTop: '0.75rem', color: '#cbd5e1', maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto' }}>
          Manage your account and app preferences from one place.
        </p>
      </section>

      <section
        style={{
          width: '100%',
          maxWidth: '48rem',
          minWidth: '20rem',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1rem',
          borderRadius: '1.5rem',
          border: '1px solid #334155',
          background: '#0f172a',
          boxShadow: '0 15px 35px rgba(15, 23, 42, 0.18)',
          padding: '1.5rem',
        }}
      >
        {/*FEATURE: Buttons */}
        {[
          { label: 'Account' },
          { label: 'Appearance' },
          { label: 'Developer Mode' },
          { label: 'Theme' },
          { label: 'Notifications' },
          { label: 'Privacy' },
          { label: 'Security' },
          { label: 'Secret Settings', to: '/settings/secret' },
        ].map((item, index) => {
          const sharedStyle = {
            minHeight: '5rem',
            width: '100%',
            boxSizing: 'border-box',
            borderRadius: '1rem',
            border: '1px solid #475569',
            background: '#1f2937',
            color: '#e2e8f0',
            fontSize: '0.95rem',
            fontWeight: 600,
            boxShadow: '0 10px 20px rgba(15, 23, 42, 0.18)',
            cursor: 'pointer',
            textAlign: 'left',
            padding: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            lineHeight: 1.2,
          }

          const itemStyle = item.to
            ? { ...sharedStyle, textDecoration: 'none' }
            : sharedStyle

          return item.to ? (
            <Link key={index} to={item.to} style={itemStyle}>
              {item.label}
            </Link>
          ) : (
            <button key={index} type="button" style={itemStyle}>
              {item.label}
            </button>
          )
        })}
      </section>
    </div>
  )
}

export default Settings