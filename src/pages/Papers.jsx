import ResourceList from '../shared/ResourceList.jsx'
import { papers } from '../resources/data.js'

export default function Papers() {
  return (
    <div className="space-y-4">
      <div className="card-surface p-4">
        <h2 className="section-title">Previous Year Papers</h2>
        <p className="text-indigo-100/80 text-sm">Past papers organized by year and class.</p>
      </div>
      <ResourceList items={papers} emptyText="Papers coming soon" />
    </div>
  )
}


