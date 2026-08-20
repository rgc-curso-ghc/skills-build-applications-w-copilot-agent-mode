import { useEffect, useState } from 'react'
import { displayValue, fetchItems } from '../api.js'
import { EmptyState, ResourcePage } from './Activities.jsx'

function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { 
    // API: https:///workspaces/skills-build-applications-w-copilot-agent-mode-8000.app.github.dev/api/workouts
    fetchItems('workouts').then(setWorkouts).catch((issue) => setError(issue.message)) }, [])

  return <ResourcePage title="Workouts" kicker="TODAY'S MENU" error={error}>
    <div className="card-grid">
      {workouts.length ? workouts.map((workout, index) => (
        <article className="workout-card" key={workout.id ?? index}>
          <span className="card-label">{displayValue(workout.level, 'ALL LEVELS')}</span>
          <h2>{displayValue(workout.name ?? workout.title, 'Untitled workout')}</h2>
          <p>{displayValue(workout.description, 'A focused session for a stronger day.')}</p>
          <span className="card-meta">{displayValue(workout.duration, 'Flexible duration')}</span>
        </article>
      )) : <EmptyState error={error} />}
    </div>
  </ResourcePage>
}

export default Workouts