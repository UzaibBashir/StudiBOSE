import AdBlock from '../shared/AdBlock.jsx'
import CategoryGrid from '../shared/CategoryGrid.jsx'

export default function Home() {
  return (
    <div className="space-y-4">
      <div className="card-surface p-4">
        <h2 className="section-title">StudiBose for JKBOSE Students</h2>
        <p className="text-indigo-100/80 text-sm leading-relaxed">
          StudiBOSE is a Educatiional website designed specifically for JKBOSE students. <br />
          Get instant access to essential study materials, including past papers, sample papers, syllabus, results, and many more. <br />
          All optimized and well organised. <br />
          EASY TO USE... EASY TO ACCESS... <br />
          Study smarter not harder, with StudiBOSE.
        </p>
      </div>

      <CategoryGrid />
      <AdBlock />
    </div>
  )
}


