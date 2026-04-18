import { useState } from 'react'
import './ActivityForm.css'

const CATEGORIES = ['Academic', 'Technical', 'Cultural', 'Sports']

const today = new Date().toLocaleDateString('en-CA')

function ActivityForm({ onAdd }) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])
  const [date, setDate] = useState(today)
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!name.trim()) {
      setError('Activity name cannot be empty.')
      return
    }

    onAdd({
      id: crypto.randomUUID(),
      name: name.trim(),
      category: category,
      date: date,
    })

    // Reset the form after submit
    setName('')
    setCategory(CATEGORIES[0])
    setDate(today)
    setError('')
  }

  return (
    <form className="activity-form" onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="activity-name">Activity Name</label>
        <input
          id="activity-name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="e.g. Solved CS Problems, Football Match...."
        />
        {error && <p className="form-error">{error}</p>}  {/* Edge Case */}
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {CATEGORIES.map(c => <option key={c}>{c}</option>)}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={date}
          max={today}
          onChange={e => setDate(e.target.value)}
        />
      </div>

      <button type="submit" className="submit-btn">
        Log Activity
      </button>
    </form>
  )
}

export default ActivityForm