const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const isLocalBrowser = ['localhost', '127.0.0.1'].includes(window.location.hostname)

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : isLocalBrowser
    ? 'http://localhost:8000/api'
    : '/api'

export function getItems(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.items)) return payload.items
  if (Array.isArray(payload?.data)) return payload.data
  return payload ? [payload] : []
}

export async function fetchItems(resource) {
  const response = await fetch(`${apiBaseUrl}/${resource}/`)
  if (!response.ok) throw new Error(`Unable to load ${resource}`)
  return getItems(await response.json())
}

export function displayValue(value, fallback = '—') {
  if (value === null || value === undefined || value === '') return fallback
  return String(value)
}