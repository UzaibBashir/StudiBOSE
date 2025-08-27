import AdBlock from '../shared/AdBlock.jsx'
import CategoryGrid from '../shared/CategoryGrid.jsx'
import { useClass } from '../context/ClassContext.jsx'

export default function Home() {
  const { selectedClass } = useClass()

  return (
    <div className="space-y-4">
      <div className="card-surface p-4">
        <h2 className="section-title">StudiBOSE for Class {selectedClass} Students</h2>
        <p className="text-indigo-100/80 text-sm leading-relaxed">
          Welcome to StudiBOSE - Your comprehensive study companion for Class {selectedClass}! <br />
          Get instant access to essential study materials, including notes, past papers, textbooks, and diagrams. <br />
          All content is optimized and well organized for Class {selectedClass} curriculum. <br />
          EASY TO USE... EASY TO ACCESS... <br />
          Study smarter not harder, with StudiBOSE.
        </p>
      </div>

      <CategoryGrid />
      <AdBlock />
    </div>
  )
}


