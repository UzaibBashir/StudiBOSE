import AdBlock from '../shared/AdBlock.jsx'
import CategoryGrid from '../shared/CategoryGrid.jsx'
import NotificationSection from '../shared/NotificationSection.jsx'

export default function Home() {
  return (
    <div className="space-y-4">
      <AdBlock />
      
      <NotificationSection />
      
      <div className="card-surface p-4">
        <h2 className="section-title">About StudiBOSE</h2>
        <p className="text-indigo-100/80 text-sm leading-relaxed">
          StudiBOSE is an educational platform designed specifically for JKBOSE students. <br />
          Our mission is to provide comprehensive study materials and resources to help students excel in their academic journey. <br />
          <br/>
          <strong>What we offer:</strong><br />
          • Comprehensive notes for all subjects and classes<br />
          • Previous year question papers with solutions<br />
          • Official textbooks and reference materials<br />
          • Interactive community for peer learning<br />
          • Easy-to-use interface optimized for mobile devices<br />
          <br />
          Select your class from the dropdown above to access materials specific to your grade level. <br />
          Study smarter, not harder, with StudiBOSE!
        </p>
      </div>

      <CategoryGrid />
    </div>
  )
}


