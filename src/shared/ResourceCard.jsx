export default function ResourceCard({ title, subtitle, subject, class: klass, year, type, driveUrl }) {
  return (
    <a href={driveUrl} target="_blank" rel="noreferrer" className="block card-surface p-4">
      <div className="flex items-center justify-between gap-2">
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-xs text-indigo-100/70">
            {[subtitle, subject && `Subject: ${subject}`, type && `Type: ${type}`, year && `Year: ${year}`]
              .filter(Boolean)
              .join(' • ')}
          </div>
        </div>
        <div className="text-xs text-indigo-100/60">Open</div>
      </div>
    </a>
  )
}


