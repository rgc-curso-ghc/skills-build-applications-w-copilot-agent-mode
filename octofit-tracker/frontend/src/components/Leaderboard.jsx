import { useEffect, useState } from 'react'
import { displayValue, fetchItems } from '../api.js'
import { EmptyState, ResourcePage } from './Activities.jsx'

function Leaderboard() {
  const [leaders, setLeaders] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchItems('leaderboard').then(setLeaders).catch((issue) => setError(issue.message)) }, [])

  return <ResourcePage title="Leaderboard" kicker="THE CLIMB" error={error}>
    <div className="leaderboard-list">
      {leaders.length ? leaders.map((leader, index) => (
        <article className={`leader-row rank-${index + 1}`} key={leader.id ?? index}>
          <span className="rank">{String(index + 1).padStart(2, '0')}</span>
          <strong>{displayValue(leader.name ?? leader.username, 'Athlete')}</strong>
          <span>{displayValue(leader.team, 'Independent')}</span>
          <b>{displayValue(leader.points, '0')} pts</b>
        </article>
      )) : <EmptyState error={error} />}
    </div>
  </ResourcePage>
}

export default Leaderboard