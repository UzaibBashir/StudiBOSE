import AdBlock from '../shared/AdBlock.jsx'
import CategoryGrid from '../shared/CategoryGrid.jsx'

export default function Home() {
  return (
    <div className="space-y-4">
      <div className="card-surface p-4">
        <h2 className="section-title">Design Studio for JKBOSE Learners</h2>
        <p className="text-indigo-100/80 text-sm leading-relaxed">
          Get curated notes, previous year papers, textbooks and image libraries for
          JKBOSE classes. Minimal, fast and mobile-first.
        </p>
      </div>

      <CategoryGrid />

      <AdBlock />
    </div>
  )
}


