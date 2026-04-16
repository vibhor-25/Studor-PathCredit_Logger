import { useState } from 'react'

const CATEGORIES = ['Academic', 'Technical', 'Cultural', 'Sports']
const ALL = 'All'

const categoryColors = {
  Academic: '#2ca2f0',
  Technical: '#2ecc71',
  Cultural: '#9b59b6',
  Sports:   '#f78b2d',
}

function ActivityFeed({ activities }) {
  const [filter, setFilter] = useState(ALL)

  const filtered = filter === ALL ? activities : activities.filter(a => a.category === filter)

  return (
    <div>
      {/* Filter Section*/}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '18px', flexWrap: 'wrap' }}>
        {[ALL, ...CATEGORIES].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '6px 14px',
              borderRadius: '18px',
              border: '1px solid #ccc',
              background: filter === cat ? '#FF010E' : 'white',
              color: filter === cat ? 'white' : '#333',
              cursor: 'pointer',
              fontWeight: filter === cat ? 'bold' : 'normal',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Handling the Empty states */}
      {activities.length === 0 && (
        <p style={{ color: '#999' }}>No activities logged yet. Add one!</p>
      )}

      {activities.length > 0 && filtered.length === 0 && (
        <p style={{ color: '#999' }}>No activities in this category.</p>
      )}

      {/* List of Activities */}
      {filtered.map(activity => (
        <div
          key={activity.id}
          style={{
            padding: '12px 16px',
            marginBottom: '10px',
            borderRadius: '6px',
            border: '1px solid #eee',
            borderLeft: `8px solid ${categoryColors[activity.category]}`,
            background: '#fafafa',
          }}
        >
          <div style={{ fontWeight: 'bold' }}>{activity.name}</div>
          <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px' }}>
            <div>{activity.category}</div>
            <div>{activity.date}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ActivityFeed