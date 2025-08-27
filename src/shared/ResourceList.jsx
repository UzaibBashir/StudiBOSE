import SearchBar from './SearchBar.jsx'
import ResourceCard from './ResourceCard.jsx'
import { useMemo, useState } from 'react'

export default function ResourceList({ items, emptyText }) {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter((it) =>
      [it.title, it.subtitle, it.class, it.subject, it.year]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
        .includes(q)
    )
  }, [items, query])

  return (
    <div className="space-y-3">
      <SearchBar value={query} onChange={setQuery} />
      {filtered.length === 0 ? (
        <div className="card-surface p-6 text-center text-indigo-100/70 text-sm">{emptyText}</div>
      ) : (
        <div className="space-y-3">
          {filtered.map((it) => (
            <ResourceCard key={it.id} {...it} />
          ))}
        </div>
      )}
    </div>
  )
}


