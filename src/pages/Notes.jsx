import ResourceList from '../shared/ResourceList.jsx'
import { useClass } from '../context/ClassContext.jsx'
import { books } from '../resources/data.js'
import UnderDevelopment from './UnderDevelopment.jsx'

export default function Books() {
  const { selectedClass } = useClass()
  
  // Filter books based on selected class
  const filteredBooks = books.filter(book => book.class === selectedClass)

  return (
    <div className="space-y-4">
      <div className="card-surface p-4">
        <h2 className="section-title">Class {selectedClass} Textbooks</h2>
        <p className="text-indigo-100/80 text-sm">Official and reference books for Class {selectedClass}.</p>
      </div>
      {/* <ResourceList items={filteredBooks} emptyText={`No books available for Class ${selectedClass}`} /> */}
      <UnderDevelopment />
    </div>
  )
}
