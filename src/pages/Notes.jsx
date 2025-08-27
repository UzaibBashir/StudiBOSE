import ResourceList from '../shared/ResourceList.jsx'
import { useClass } from '../context/ClassContext.jsx'
import { notes } from '../resources/data.js'

export default function Notes() {
  const { selectedClass } = useClass()
  
  // Filter notes based on selected class
  const filteredNotes = notes.filter(note => note.class === selectedClass)

  return (
    <div className="space-y-4">
      <div className="card-surface p-4">
        <h2 className="section-title">Class {selectedClass} Notes</h2>
        <p className="text-indigo-100/80 text-sm">Concise notes by chapter and subject for Class {selectedClass}.</p>
      </div>
      <ResourceList items={filteredNotes} emptyText={`No notes available for Class ${selectedClass}`} />
    </div>
  )
}


