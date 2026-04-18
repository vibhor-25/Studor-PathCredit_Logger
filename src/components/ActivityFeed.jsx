import { useState } from 'react'
import './ActivityFeed.css'

const CATEGORIES = ['Academic', 'Technical', 'Cultural', 'Sports']
const ALL = 'All'

function formatDate(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number)
  const date = new Date(year, month - 1, day)
  const monthName = date.toLocaleString('en-US', { month: 'long' })
  const suffix =
    day%10 === 1 && day!== 11 ? 'st' :
    day%10 === 2 && day!== 12 ? 'nd' :
    day%10 === 3 && day!== 13 ? 'rd' : 'th'
  return `${day}${suffix} ${monthName} ${year}`
}

const categoryColors = {
  Academic: '#2ca2f0',
  Technical: '#2ecc71',
  Cultural:  '#9b59b6',
  Sports:    '#f78b2d',
}

function ActivityFeed({ activities }) {
  const [filter, setFilter] = useState(ALL)

  const filtered = filter === ALL ? activities : activities.filter(a => a.category === filter)

  return (
    <div>
      <div className="filter-bar">
        {[ALL, ...CATEGORIES].map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {activities.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">📋</div>
          <p>No activities logged yet. Add one!</p> {/* Edge Case */}
        </div>
      )}

      {activities.length > 0 && filtered.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <p>No activities in this category.</p> {/* Edge Case */}
        </div>
      )}

      <div className="activity-list">
        {filtered.map(activity => (
          <div
            key={activity.id}
            className="activity-card"
            style={{ borderLeftColor: categoryColors[activity.category] }}
          >
            <div className="activity-name">{activity.name}</div>
            <div className="activity-meta">
              <span
                className="activity-badge"
                style={{ background: categoryColors[activity.category] }}
              >
                {activity.category}
              </span>
              <span className="activity-date">{formatDate(activity.date)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityFeed
