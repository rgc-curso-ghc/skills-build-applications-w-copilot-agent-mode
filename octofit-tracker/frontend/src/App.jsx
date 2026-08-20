import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const navigation = [
  { label: 'Overview', path: '/' },
  { label: 'Activities', path: '/activities' },
  { label: 'Leaderboard', path: '/leaderboard' },
  { label: 'Teams', path: '/teams' },
  { label: 'Users', path: '/users' },
  { label: 'Workouts', path: '/workouts' },
]

function Overview() {
  return (
    <section className="overview-page">
      <div className="eyebrow">OCTOFIT / PERFORMANCE HUB</div>
      <h1>Make every move count.</h1>
      <p className="lede">Track the work, rally your team, and keep the leaderboard moving.</p>
      <div className="overview-grid">
        <NavLink className="overview-tile tile-coral" to="/activities"><span className="tile-number">01</span><strong>Log activity</strong><span>Turn effort into momentum.</span></NavLink>
        <NavLink className="overview-tile tile-blue" to="/leaderboard"><span className="tile-number">02</span><strong>See the leaderboard</strong><span>Find your next place to climb.</span></NavLink>
        <NavLink className="overview-tile tile-lime" to="/workouts"><span className="tile-number">03</span><strong>Choose a workout</strong><span>Start with a plan that fits today.</span></NavLink>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <NavLink className="brand" to="/"><span className="brand-mark">O</span><span>OctoFit</span></NavLink>
        <nav className="main-nav" aria-label="Primary navigation">
          {navigation.map((item) => <NavLink key={item.path} className={({ isActive }) => (isActive ? 'active' : '')} end={item.path === '/'} to={item.path}>{item.label}</NavLink>)}
        </nav>
        <span className="status-dot">API online</span>
      </header>
      <main className="app-main">
        <Routes>
          <Route element={<Overview />} path="/" />
          <Route element={<Activities />} path="/activities" />
          <Route element={<Leaderboard />} path="/leaderboard" />
          <Route element={<Teams />} path="/teams" />
          <Route element={<Users />} path="/users" />
          <Route element={<Workouts />} path="/workouts" />
        </Routes>
      </main>
      <footer className="app-footer">Train together. Go further.</footer>
    </div>
  )
}

export default App
