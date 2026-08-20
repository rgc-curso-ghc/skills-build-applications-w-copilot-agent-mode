import { useEffect, useState } from 'react'
import { displayValue, fetchItems } from '../api.js'

function Activities() {
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchItems('activities').then(setActivities).catch((issue) => setError(issue.message))
  }, [])

  return <ResourcePage title="Activities" kicker="DAILY OUTPUT" error={error}>
    <div className="resource-list">
      {activities.length ? activities.map((activity, index) => (
        <article className="resource-row" key={activity.id ?? index}>
          <span className="row-index">{String(index + 1).padStart(2, '0')}</span>
          <strong>{displayValue(activity.name ?? activity.type, 'Activity')}</strong>
          <span>{displayValue(activity.duration, 'Duration pending')}</span>
          <span className="row-accent">{displayValue(activity.points, '—')} pts</span>
        </article>
      )) : <EmptyState error={error} />}
    </div>
  </ResourcePage>
}

export function ResourcePage({ title, kicker, error, children }) {
  return <section className="resource-page">
    <div className="eyebrow">{kicker}</div>
    <h1>{title}</h1>
    <p className="page-intro">Live data from the OctoFit API.</p>
    {error && <div className="alert alert-warning">{error}. Check that the backend is running on port 8000.</div>}
    {children}
  </section>
}

export function EmptyState({ error }) {
  return <div className="empty-state">{error ? 'No data returned.' : 'Nothing here yet. Your next entry starts the list.'}</div>
}

export default Activities