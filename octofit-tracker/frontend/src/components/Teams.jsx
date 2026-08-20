import { useEffect, useState } from 'react'
import { displayValue, fetchItems } from '../api.js'
import { EmptyState, ResourcePage } from './Activities.jsx'

function Teams() {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { 
    // API: https:///workspaces/skills-build-applications-w-copilot-agent-mode-8000.app.github.dev/api/teams
    fetchItems('teams').then(setTeams).catch((issue) => setError(issue.message)) }, [])

  return <ResourcePage title="Teams" kicker="FIND YOUR PEOPLE" error={error}>
    <div className="card-grid">
      {teams.length ? teams.map((team, index) => (
        <article className="team-card" key={team.id ?? index}>
          <span className="card-label">TEAM {String(index + 1).padStart(2, '0')}</span>
          <h2>{displayValue(team.name, 'Unnamed team')}</h2>
          <p>{displayValue(team.description, 'Ready for a new challenge.')}</p>
          <span className="card-meta">{displayValue(team.members, '0')} members</span>
        </article>
      )) : <EmptyState error={error} />}
    </div>
  </ResourcePage>
}

export default Teams