import { createContext, useContext, useState } from 'react'

const ClassContext = createContext()

export function ClassProvider({ children }) {
  const [selectedClass, setSelectedClass] = useState('9')

  return (
    <ClassContext.Provider value={{ selectedClass, setSelectedClass }}>
      {children}
    </ClassContext.Provider>
  )
}

export function useClass() {
  const context = useContext(ClassContext)
  if (!context) {
    throw new Error('useClass must be used within a ClassProvider')
  }
  return context
}
