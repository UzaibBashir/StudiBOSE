import ResourceList from '../shared/ResourceList.jsx'
import { useClass } from '../context/ClassContext.jsx'
import { resources } from '../resources/data.js'
import UnderDevelopment from './UnderDevelopment.jsx'

export default function Papers() {
  const { selectedClass } = useClass()
  
  // Filter papers based on selected class
  const filteredPapers = resources[`class${selectedClass}`]?.papers || []

  return (
    <div className="space-y-4">
      <div className="card-surface p-4">
        <h2 className="section-title">Class {selectedClass} Previous Year Papers</h2>
        <p className="text-indigo-100/80 text-sm">Past papers organized by year and subject for Class {selectedClass}.</p>
      </div>
      {/* <ResourceList items={filteredPapers} emptyText={`No papers available for Class ${selectedClass}`} /> */}
      <UnderDevelopment/>
    </div>
  )
}


