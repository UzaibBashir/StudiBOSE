import { useState } from 'react'

const initialNotifications = [
  {
    id: 1,
    type: 'announcement',
    title: 'New Study Materials Added',
    message: 'Fresh NCERT solutions for Class 10 Mathematics are now available!',
    timestamp: '2 hours ago',
    isRead: false
  },
  {
    id: 2,
    type: 'update',
    title: 'Community Feature Coming Soon',
    message: 'Get ready to connect with classmates and share study tips!',
    timestamp: '1 day ago',
    isRead: false
  },
  {
    id: 3,
    type: 'reminder',
    title: 'Exam Preparation Tips',
    message: 'Check out our comprehensive guide for board exam preparation.',
    timestamp: '3 days ago',
    isRead: true
  }
]

export default function NotificationSection() {
  const [notificationsList, setNotificationsList] = useState(initialNotifications)
  const [showAll, setShowAll] = useState(false)

  const unreadCount = notificationsList.filter(n => !n.isRead).length
  const displayNotifications = showAll ? notificationsList : notificationsList.slice(0, 2)

  const markAsRead = (id) => {
    setNotificationsList(notificationsList.map(n => 
      n.id === id ? { ...n, isRead: true } : n
    ))
  }

  const getIcon = (type) => {
    switch (type) {
      case 'announcement': return '📢'
      case 'update': return '🔄'
      case 'reminder': return '⏰'
      default: return '📌'
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'announcement': return 'bg-blue-500/20 border-blue-500/30'
      case 'update': return 'bg-green-500/20 border-green-500/30'
      case 'reminder': return 'bg-orange-500/20 border-orange-500/30'
      default: return 'bg-indigo-500/20 border-indigo-500/30'
    }
  }

  return (
    <div className="card-surface p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold flex items-center gap-2">
          <span>🔔</span>
          Notifications
          {unreadCount > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {unreadCount}
            </span>
          )}
        </h3>
        {notificationsList.length > 2 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs text-indigo-300 hover:text-indigo-200"
          >
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        )}
      </div>

      <div className="space-y-3">
        {displayNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-3 rounded-lg border ${getTypeColor(notification.type)} ${
              !notification.isRead ? 'ring-1 ring-indigo-500/30' : ''
            }`}
            onClick={() => markAsRead(notification.id)}
          >
            <div className="flex items-start gap-3">
              <div className="text-lg">{getIcon(notification.type)}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm">{notification.title}</h4>
                  <span className="text-xs text-indigo-300/60">{notification.timestamp}</span>
                </div>
                <p className="text-xs text-indigo-200/80 mt-1">{notification.message}</p>
                {!notification.isRead && (
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {notificationsList.length === 0 && (
        <div className="text-center py-4 text-indigo-200/60 text-sm">
          No notifications at the moment
        </div>
      )}
    </div>
  )
}
