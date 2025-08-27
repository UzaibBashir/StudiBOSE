import ResourceList from '../shared/ResourceList.jsx'
import { images } from '../resources/data.js'

export default function Images() {
  return (
    <div className="space-y-4">
      <div className="card-surface p-4">
        <h2 className="section-title">Image Library</h2>
        <p className="text-indigo-100/80 text-sm">Diagrams and infographics.</p>
      </div>
      <ResourceList items={images} emptyText="Images coming soon" />
    </div>
  )
}


