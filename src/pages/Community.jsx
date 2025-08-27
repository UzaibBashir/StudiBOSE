import { useClass } from '../context/ClassContext.jsx'

export default function Community() {
  const { selectedClass } = useClass()

  return (
    <div className="space-y-4">
      <div className="card-surface p-4">
        <h2 className="section-title">Class {selectedClass} Community</h2>
        <p className="text-indigo-100/80 text-sm">Connect with your classmates, ask questions, and share study tips!</p>
      </div>

      {/* Under Development Overlay */}
      <div className="relative">
        <div className="card-surface p-8 text-center">
          <div className="mb-4">
            <div className="text-6xl mb-4">👥</div>
            <h3 className="text-xl font-semibold mb-2">Community Feature</h3>
            <p className="text-indigo-100/70 mb-4">
              This exciting new feature is currently under development.
            </p>
            <div className="bg-indigo-600/20 border border-indigo-500/30 rounded-lg p-4">
              <p className="text-sm text-indigo-200">
                <strong>Coming Soon:</strong><br />
                • Ask questions and get help from classmates<br />
                • Share study tips and resources<br />
                • Create study groups<br />
                • Real-time discussions<br />
                • Peer-to-peer learning
              </p>
            </div>
          </div>
          
          <div className="border-t border-indigo-700/50 pt-4">
            <p className="text-xs text-indigo-300/60">
              Under Development by <span className="font-semibold text-indigo-300">Uzaib</span>
            </p>
          </div>
        </div>
        
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/20 to-indigo-900/40 rounded-lg pointer-events-none"></div>
      </div>
    </div>
  )
}
