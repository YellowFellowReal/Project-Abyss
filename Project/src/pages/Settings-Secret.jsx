// #region | FILE: Settings-Secret.jsx
// - Hidden settings page for advanced test controls.
// - Supports secret image upload and API experimentation.
// - Includes navigation back to the main Settings page.
// #endregion

// ==============
// IMPORTS
// ==============
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Autumn00 from '../assets/Autumn00.jpg'

// ==============
// FUNCTIONS
// ==============


// Function: SecretSettings
function SecretSettings() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [pokemonList, setPokemonList] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [apiError, setApiError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loadingList, setLoadingList] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [modalMessage, setModalMessage] = useState(null)

  /// Function: handleFileChange
  // - Handles the file input change event.
  // - Updates the selectedFile state with the chosen file.
  function handleFileChange(event) {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  // Function: parsePokemonId
  // - Extracts the Pokémon ID from the provided URL.
  function parsePokemonId(url) {
    const parts = url.split('/').filter(Boolean)
    return Number(parts[parts.length - 1])
  }


  // Function: loadPokemonList
  // - Fetches a list of Pokémon from the PokéAPI and stores it in state.
  async function loadPokemonList() {
    setLoadingList(true)
    setApiError(null)
    setSelectedPokemon(null)

    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
      if (!response.ok) {
        throw new Error(`PokéAPI error: ${response.status}`)
      }

      const data = await response.json()
      const list = data.results.map((item) => {
        const id = parsePokemonId(item.url)
        return {
          id,
          name: item.name,
          url: item.url,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        }
      })

      setPokemonList(list)
      console.log('Pokémon:', list)
    } catch (error) {
      setApiError(error.message)
    } finally {
      setLoadingList(false)
    }
  }


  // Function: showModal
  // - Displays a modal alert with the provided message.
  function showModal(message) {
    setModalMessage(message)
    setModalVisible(true)
  }

  // Function: closeModal
  // - Closes the modal alert and resets its message.
  function closeModal() {
    setModalVisible(false)
    setModalMessage(null)
  }

 // Function: callPokemon
  // - Selects a random Pokémon from the loaded list and updates the state.
  // - If the list is not loaded, shows a modal alert.
  function callPokemon() {
    if (pokemonList.length === 0) {
      showModal('Pokémon list is not loaded yet. Please load the Pokémon first.')
      return
    }

    setApiError(null)
    const randomIndex = Math.floor(Math.random() * pokemonList.length)
    setSelectedPokemon(pokemonList[randomIndex])
  }

  // ==============
  // STYLES
  // ==============
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '2rem',
    width: '100%',
  }

  const headerStyle = {
    width: '100%',
    textAlign: 'center',
  }

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: '#f8fafc',
    textShadow: '0 2px 10px rgba(0,0,0,0.4)',
    margin: 0,
  }

  const descriptionStyle = {
    marginTop: '0.75rem',
    color: '#cbd5e1',
    maxWidth: '40rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  const panelStyle = {
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
  }

  const cardStyle = {
    borderRadius: '1.25rem',
    border: '1px solid #475569',
    background: '#111827',
    padding: '1.25rem',
    boxShadow: '0 10px 20px rgba(15, 23, 42, 0.18)',
  }

  const cardTitleStyle = {
    fontSize: '1.15rem',
    fontWeight: 700,
    color: '#f8fafc',
    margin: 0,
  }

  const textStyle = {
    marginTop: '0.75rem',
    color: '#cbd5e1',
    lineHeight: 1.6,
  }

  const inputStyle = {
    width: '100%',
    borderRadius: '0.85rem',
    border: '1px solid #334155',
    background: '#0f172a',
    color: '#e2e8f0',
    padding: '0.9rem 1rem',
    outline: 'none',
    fontSize: '0.95rem',
    boxSizing: 'border-box',
  }

  const buttonStyle = {
    minHeight: '4.5rem',
    width: '100%',
    borderRadius: '1rem',
    border: '1px solid #475569',
    background: '#1f2937',
    color: '#e2e8f0',
    fontSize: '0.95rem',
    fontWeight: 600,
    boxShadow: '0 10px 20px rgba(15, 23, 42, 0.18)',
    cursor: 'pointer',
    textAlign: 'center',
    padding: '1rem',
  }

  const linkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '9999px',
    border: '1px solid #475569',
    background: '#0f172a',
    color: '#cbd5e1',
    padding: '0.75rem 1.25rem',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 600,
  }

  const resultStyle = {
    marginTop: '1rem',
    borderRadius: '1rem',
    border: '1px solid #334155',
    background: '#0f172a',
    padding: '1rem',
    color: '#cbd5e1',
    fontSize: '0.95rem',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
  }

  const modalOverlayStyle = {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(7, 14, 27, 0.75)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
    zIndex: 50,
  }

  const modalStyle = {
    width: '100%',
    maxWidth: '28rem',
    background: '#020617',
    borderRadius: '1.25rem',
    border: '1px solid #475569',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45)',
    padding: '1.5rem',
    color: '#e2e8f0',
  }

  const modalHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
    marginBottom: '1rem',
  }

  const modalTitleStyle = {
    margin: 0,
    fontSize: '1.125rem',
    fontWeight: 700,
  }

  const closeButtonStyle = {
    border: 'none',
    background: '#1f2937',
    color: '#e2e8f0',
    borderRadius: '9999px',
    padding: '0.5rem 0.85rem',
    cursor: 'pointer',
  }

  const modalTextStyle = {
    margin: 0,
    lineHeight: 1.6,
    color: '#cbd5e1',
  }

  // ==============
  // RENDER
  // ==============
  return (
    <div style={pageStyle}>
      <section style={headerStyle}>
        <h1 style={titleStyle}>Secret Settings</h1>
        <p style={descriptionStyle}>
          Advanced settings and developer tools built with the same layout as the main
          settings page.
        </p>
      </section>

      <section style={panelStyle}>
        <div style={cardStyle}>
          <h2 style={cardTitleStyle}>Upload Secret Image</h2>
          <p style={textStyle}>
            Upload an image and preview it locally. This section is a good place to
            practice integrating file upload APIs later.
          </p>

          <div style={{ marginTop: '1rem', display: 'grid', gap: '1rem' }}>
            <input type="file" accept="image/*" onChange={handleFileChange} style={inputStyle} />

            {selectedFile && (
              <div style={{ ...cardStyle, background: '#0b1120', borderColor: '#1f2937' }}>
                <p style={{ color: '#f8fafc', fontWeight: 600, margin: 0 }}>{selectedFile.name}</p>
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Preview"
                  style={{ marginTop: '1rem', width: '100%', maxHeight: '18rem', objectFit: 'contain', borderRadius: '1rem' }}
                />
              </div>
            )}

            <div style={{ ...cardStyle, background: '#0b1120', borderColor: '#1f2937' }}>
              <p style={{ color: '#f8fafc', fontWeight: 600, margin: 0 }}>Static secret image asset</p>
              <img
                src={Autumn00}
                alt="Autumn placeholder"
                style={{ marginTop: '1rem', width: '100%', maxHeight: '18rem', objectFit: 'cover', borderRadius: '1rem' }}
              />
            </div>
          </div>
        </div>

        <div style={cardStyle}>
          <h2 style={cardTitleStyle}>Pokémon API Practice</h2>
          <p style={textStyle}>
            Load Pokémon from the PokéAPI, then call a random one from the list.
          </p>

          <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
            <button
              type="button"
              onClick={loadPokemonList}
              style={buttonStyle}
              disabled={loadingList}
            >
              {loadingList ? 'Loading Pokémon...' : 'Load Pokémon'}
            </button>

            <button
              onClick={callPokemon}
              style={buttonStyle}
              disabled={loadingList}
            >
              Call Pokémon
            </button>
          </div>

          {apiError && <div style={resultStyle}>Error: {apiError}</div>}

          {pokemonList.length > 0 && (
            <div style={resultStyle}>
              <strong>Data Loaded.</strong>
            </div>
          )}

          {selectedPokemon && (
            <div style={resultStyle}>
              <strong>Random Pokémon:</strong>
              <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div>
                  <div>{selectedPokemon.name}</div>
                  <div style={{ color: '#94a3b8' }}>ID: {selectedPokemon.id}</div>
                </div>
                {selectedPokemon.sprite && (
                  <img
                    src={selectedPokemon.sprite}
                    alt={selectedPokemon.name}
                    style={{ width: '96px', height: '96px', objectFit: 'contain', borderRadius: '1rem' }}
                  />
                )}
              </div>
            </div>
          )}
        </div>

        <div>
          <Link to="/settings" style={linkStyle}>
            Back to Settings
          </Link>
        </div>
      </section>

      {modalVisible && (
        <div style={modalOverlayStyle} onClick={closeModal}>
          <div style={modalStyle} onClick={(event) => event.stopPropagation()}>
            <div style={modalHeaderStyle}>
              <h2 style={modalTitleStyle}>Alert</h2>
              <button type="button" onClick={closeModal} style={closeButtonStyle}>
                Close
              </button>
            </div>
            <p style={modalTextStyle}>{modalMessage}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default SecretSettings
