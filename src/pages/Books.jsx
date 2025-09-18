import { useState } from 'react'
import { useClass } from '../context/ClassContext.jsx'
import ResourceList from '../shared/ResourceList.jsx'
import { resources } from '../resources/data.js'

const categories = [
  { id: 'ncert', title: 'NCERT', icon: '📚' },
  { id: 'jkbose', title: 'JKBOSE Textbooks', icon: '📖' },
  { id: 'solutions', title: 'NCERT Solutions', icon: '✅' },
  { id: 'reference', title: 'Reference Materials', icon: '📝' }
]

export default function Books() {
  const { selectedClass } = useClass();
  const [selectedCategory, setSelectedCategory] = useState('jkbose');

  // Get books for selected class
  const books = resources[`class${selectedClass}`]?.books || [];

  // Categorize books based on type
  const categorizedBooks = {
    jkbose: books.filter(book => book.type === 'JKBOSE Textbook'),
    ncert: [], // Add logic if NCERT books are present in resources
    solutions: [], // Add logic if solutions are present in resources
    reference: [] // Add logic if reference materials are present in resources
  };

  const currentBooks = categorizedBooks[selectedCategory] || [];

  return (
    <div className="space-y-4">
      <div className="card-surface p-4">
        <h2 className="section-title">Class {selectedClass} Notes</h2>
        <p className="text-indigo-100/80 text-sm">Organized study materials by category.</p>
      </div>

      {/* Category Folders */}
      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`p-4 rounded-xl text-center transition-colors ${
              selectedCategory === category.id
                ? 'bg-indigo-600 text-white'
                : 'bg-white/10 text-indigo-200 hover:bg-white/20'
            }`}
          >
            <div className="text-2xl mb-2">{category.icon}</div>
            <div className="text-sm font-medium">{category.title}</div>
            <div className="text-xs opacity-70 mt-1">
              {categorizedBooks[category.id]?.length || 0} items
            </div>
          </button>
        ))}
      </div>

      {/* Selected Category Content */}
      <div className="card-surface p-4">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <span>{categories.find(c => c.id === selectedCategory)?.icon}</span>
          {categories.find(c => c.id === selectedCategory)?.title}
        </h3>
        <ResourceList 
          items={currentBooks} 
          emptyText={`No ${categories.find(c => c.id === selectedCategory)?.title} available for Class ${selectedClass}`} 
        />
      </div>
    </div>
  )
}


