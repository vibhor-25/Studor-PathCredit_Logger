import {useState, useEffect} from 'react'
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

  function addActivity(newActivity) {
    setActivities(prev => [newActivity, ...prev])
  }

  return (
    <div className="container">
      <h1>PathCredit Logger</h1>
      <div className="layout">
        <div className="left-panel">
          <h2>Log Your Activity</h2>
          <ActivityForm onAdd={addActivity} />
        </div>

        <div className="right-panel">
          <h2>Activity Feed</h2>
          <ActivityFeed activities={activities} />
        </div>
      </div>
    </div>
  )
}

export default App