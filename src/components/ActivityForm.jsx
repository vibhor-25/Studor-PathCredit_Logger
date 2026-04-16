import { useState } from 'react'

const CATEGORIES = ['Academic', 'Technical', 'Cultural', 'Sports']

const today = new Date().toLocaleDateString('en-CA');

function ActivityForm({onAdd}) {
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
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
      <div>
        <label>Activity Name</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="e.g. CS Problems, Football Match..."
          style={{ display: 'block', width: '100%', marginTop: '4px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        {error && <p style={{ color: 'red', fontSize: '0.7rem', marginTop: '4px' }}>{error}</p>}
      </div>

      <div>
        <label>Category</label>
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          style={{ display: 'block', width: '100%', marginTop: '4px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          {CATEGORIES.map(c => <option key={c}>{c}</option>)}
        </select>
      </div>

      <div>
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          max={today}   //To prevent picking a future date
          style={{ display: 'block', width: '100%', marginTop: '4px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>

      <button
        type="submit"
        style={{ padding: '10px', background: '#FF010E',marginTop:'16px', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        Log Activity
      </button>
    </form>
  )
}

export default ActivityForm