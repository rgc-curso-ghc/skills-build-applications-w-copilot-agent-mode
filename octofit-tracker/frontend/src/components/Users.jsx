import { useEffect, useState } from 'react'
import { displayValue, fetchItems } from '../api.js'
import { EmptyState, ResourcePage } from './Activities.jsx'

function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { 
    // API: https:///workspaces/skills-build-applications-w-copilot-agent-mode-8000.app.github.dev/api/users
    fetchItems('users').then(setUsers).catch((issue) => setError(issue.message)) }, [])

  return <ResourcePage title="Users" kicker="THE COMMUNITY" error={error}>
    <div className="resource-list">
      {users.length ? users.map((user, index) => (
        <article className="resource-row" key={user.id ?? index}>
          <span className="avatar">{displayValue(user.name ?? user.username, 'A').charAt(0).toUpperCase()}</span>
          <strong>{displayValue(user.name ?? user.username, 'Unnamed athlete')}</strong>
          <span>{displayValue(user.email, 'Profile in progress')}</span>
          <span className="row-accent">{displayValue(user.team, 'Independent')}</span>
        </article>
      )) : <EmptyState error={error} />}
    </div>
  </ResourcePage>
}

export default Users