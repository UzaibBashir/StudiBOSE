import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Notes from './pages/Notes.jsx'
import Papers from './pages/Papers.jsx'
import Books from './pages/Books.jsx'
import Images from './pages/Images.jsx'
import About from './pages/About.jsx'
import { ClassProvider } from './context/ClassContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'notes', element: <Notes /> },
      { path: 'papers', element: <Papers /> },
      { path: 'books', element: <Books /> },
      { path: 'images', element: <Images /> },
      { path: 'about', element: <About /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClassProvider>
      <RouterProvider router={router} />
    </ClassProvider>
  </StrictMode>,
)
