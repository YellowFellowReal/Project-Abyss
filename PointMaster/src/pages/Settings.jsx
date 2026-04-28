import { Link } from 'react-router-dom'

// Settings page — manage your account and preferences
function Settings() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-3 text-gray-500">
          Manage your account and app preferences from one place.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              <Link to="/settings/secret" className="hover:text-indigo-700">
                Secret Settings
              </Link>
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Use this hidden section to configure advanced behavior and experimental features.
            </p>
          </div>
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
            hidden
          </span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-sm font-semibold text-gray-900">Developer Mode</h3>
            <p className="mt-2 text-sm text-gray-600">
              Toggle developer-only features, debug logging, and extra diagnostics.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-sm font-semibold text-gray-900">Theme Debug</h3>
            <p className="mt-2 text-sm text-gray-600">
              Enable theme override support and preview color palettes that are not yet public.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4">
          <h3 className="text-sm font-semibold text-gray-900">Secret Access</h3>
          <p className="mt-2 text-sm text-gray-600">
            This area is for testing and demo settings only. Nothing here changes real application data yet.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Settings