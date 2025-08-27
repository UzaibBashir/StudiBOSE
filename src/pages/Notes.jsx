import ResourceList from '../shared/ResourceList.jsx'
import { notes } from '../resources/data.js'

export default function Notes() {
  return (
    <div className="space-y-4">
      <div className="card-surface p-4">
        <h2 className="section-title">Notes</h2>
        <p className="text-indigo-100/80 text-sm">Concise notes by chapter and class.</p>
      </div>
      <ResourceList items={notes} emptyText="Notes coming soon" />
    </div>
  )
}


