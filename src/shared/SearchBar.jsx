export default function SearchBar({ value, onChange }) {
  return (
    <div className="card-surface flex items-center gap-2 px-3 py-2">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search…"
        className="bg-transparent outline-none w-full text-sm placeholder:text-indigo-200/60"
      />
    </div>
  )
}


