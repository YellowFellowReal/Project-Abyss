import { useState } from 'react'
import { Link } from 'react-router-dom'
import Autumn00 from '../assets/Autumn00.jpg'

// Secret Settings page — hidden app options for testing
function SecretSettings() {
  const [selectedFile, setSelectedFile] = useState(null)

  function handleFileChange(event) {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold text-gray-900">Secret Settings</h1>
        <p className="mt-3 text-gray-500">
          This is the hidden settings page for advanced and experimental options.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">Upload Secret Image</h2>

        <div className="mt-4 space-y-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full rounded-lg border border-gray-300 bg-white p-2"
          />

          {selectedFile && (
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm font-medium text-gray-900">{selectedFile.name}</p>
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Preview"
                className="mt-3 max-h-60 w-full object-contain"
              />
            </div>
          )}

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-medium text-gray-900">Static secret image asset</p>
            <img
              src={Autumn00}
              alt="Autumn placeholder"
              className="mt-3 max-h-60 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">Experimental Controls</h2>
        <div className="mt-4 space-y-4 text-sm text-gray-600">
          <p>
            These controls are for testing only. They do not affect your normal account
            settings yet.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Developer Mode toggle</li>
            <li>Theme debug preview</li>
            <li>Secret access verification</li>
          </ul>
        </div>
      </section>

      <div>
        <Link
          to="/settings"
          className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200"
        >
          Back to Settings
        </Link>
      </div>
    </div>
  )
}

export default SecretSettings
