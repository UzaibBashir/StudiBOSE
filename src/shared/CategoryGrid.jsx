import { Link } from 'react-router-dom'

const items = [
  { title: 'Notes', to: '/notes', color: 'from-orange-400 to-pink-500' },
  { title: 'Papers', to: '/papers', color: 'from-indigo-400 to-blue-500' },
  { title: 'Books', to: '/books', color: 'from-emerald-400 to-teal-500' },
  { title: 'Community', to: '/community', color: 'from-violet-400 to-fuchsia-500' },
]

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item) => (
        <Link key={item.to} to={item.to} className={`rounded-2xl p-4 text-center font-medium bg-gradient-to-br ${item.color} text-white`}>
          {item.title}
        </Link>
      ))}
    </div>
  )
}


