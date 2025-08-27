import { Outlet, NavLink } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 text-white flex flex-col">
      <header className="sticky top-0 z-20 backdrop-blur bg-indigo-900/60 border-b border-white/10">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-lg font-semibold tracking-wide">StudiBOSE</div>
          <nav>
            <NavLink to="/about" className="text-indigo-200 text-sm">About</NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-md w-full mx-auto px-4 py-4">
        <Outlet />
      </main>

      <nav className="sticky bottom-0 z-20 max-w-md w-full mx-auto">
        <div className="m-3 rounded-2xl bg-white/10 backdrop-blur p-2 grid grid-cols-5 text-xs">
          <NavLink to="/" end className={({isActive}) => `flex flex-col items-center py-2 rounded-xl ${isActive ? 'bg-white/20' : ''}`}>Home</NavLink>
          <NavLink to="/notes" className={({isActive}) => `flex flex-col items-center py-2 rounded-xl ${isActive ? 'bg-white/20' : ''}`}>Notes</NavLink>
          <NavLink to="/papers" className={({isActive}) => `flex flex-col items-center py-2 rounded-xl ${isActive ? 'bg-white/20' : ''}`}>Papers</NavLink>
          <NavLink to="/books" className={({isActive}) => `flex flex-col items-center py-2 rounded-xl ${isActive ? 'bg-white/20' : ''}`}>Books</NavLink>
          <NavLink to="/images" className={({isActive}) => `flex flex-col items-center py-2 rounded-xl ${isActive ? 'bg-white/20' : ''}`}>Images</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default App
