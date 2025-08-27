import { Outlet } from 'react-router-dom'
import { useClass } from './context/ClassContext.jsx'
import Navigation from './shared/Navigation.jsx'
import './App.css'

function App() {
  const { selectedClass, setSelectedClass } = useClass()

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 text-white flex flex-col">
      <header className="sticky top-0 z-20 backdrop-blur bg-indigo-900/60 border-b border-white/10">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-lg font-semibold tracking-wide">StudiBOSE</div>
          <div className="flex items-center space-x-2">
            <label htmlFor="class-select" className="text-indigo-200 text-sm">Class:</label>
            <select
              id="class-select"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="bg-indigo-800/50 border border-indigo-600/50 rounded-lg px-2 py-1 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="9">9th</option>
              <option value="10">10th</option>
              <option value="11">11th</option>
              <option value="12">12th</option>
            </select>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-md w-full mx-auto px-4 py-4">
        <Outlet />
      </main>

      <nav className="sticky bottom-0 z-20 max-w-md w-full mx-auto">
        <div className="m-3 rounded-2xl bg-white/10 backdrop-blur p-2 grid grid-cols-5 text-xs">
          <Navigation />
        </div>
      </nav>
    </div>
  )
}

export default App
