import ResourceList from '../shared/ResourceList.jsx'
import { useClass } from '../context/ClassContext.jsx'
import { images } from '../resources/data.js'

export default function Images() {
  const { selectedClass } = useClass()
  
  // Filter images based on selected class
  const filteredImages = images.filter(image => image.class === selectedClass)

  return (
    <div className="space-y-4">
      <div className="card-surface p-4">
        <h2 className="section-title">Class {selectedClass} Image Library</h2>
        <p className="text-indigo-100/80 text-sm">Diagrams and infographics for Class {selectedClass}.</p>
      </div>
      <ResourceList items={filteredImages} emptyText={`No images available for Class ${selectedClass}`} />
    </div>
  )
}


