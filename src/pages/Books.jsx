import ResourceList from '../shared/ResourceList.jsx'
import { books } from '../resources/data.js'

export default function Books() {
  return (
    <div className="space-y-4">
      <div className="card-surface p-4">
        <h2 className="section-title">Textbooks</h2>
        <p className="text-indigo-100/80 text-sm">Official and reference books.</p>
      </div>
      <ResourceList items={books} emptyText="Books coming soon" />
    </div>
  )
}


