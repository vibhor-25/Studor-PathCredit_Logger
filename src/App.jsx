import { useState, useEffect } from 'react'
import './App.css'
import ActivityForm from './components/ActivityForm'
import ActivityFeed from './components/ActivityFeed'

function App() {

  // const [activities, setActivities] = useState([])

  // Using Local Storage
  const [activities, setActivities] = useState(() => {
    const stored = localStorage.getItem('pathcredit_activities')
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem('pathcredit_activities', JSON.stringify(activities))
  }, [activities])

  function addActivity(activity) {
    setActivities(prev => [activity, ...prev])
  }

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1>Path<span>Credit</span> Logger</h1>
        <p>Track your milestones and earn Credits</p>
      </header>

      <div className="layout">
        <div className="panel left-panel">
          <p className="panel-title">Log Your Activity</p>
          <ActivityForm onAdd={addActivity} />
        </div>

        <div className="panel right-panel">
          <p className="panel-title">Activity Feed</p>
          <ActivityFeed activities={activities} />
        </div>
      </div>
    </div>
  )
}

export default App