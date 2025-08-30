import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <>
      <NavLink to="/" end className={({isActive}) => `flex flex-col items-center py-4 rounded-xl text-base ${isActive ? 'bg-white/20' : ''}`}>Home</NavLink>
      <NavLink to="/notes" className={({isActive}) => `flex flex-col items-center py-4 rounded-xl text-base ${isActive ? 'bg-white/20' : ''}`}>Notes</NavLink>
      <NavLink to="/papers" className={({isActive}) => `flex flex-col items-center py-4 rounded-xl text-base ${isActive ? 'bg-white/20' : ''}`}>Papers</NavLink>
      <NavLink to="/books" className={({isActive}) => `flex flex-col items-center py-4 rounded-xl text-base ${isActive ? 'bg-white/20' : ''}`}>Books</NavLink>
      <NavLink to="/community" className={({isActive}) => `flex flex-col items-center py-4 rounded-xl text-base ${isActive ? 'bg-white/20' : ''}`}>Community</NavLink>
    </>
  )
}
