import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '../pages/homePage'
import Sign_in from '../pages/sign-in'
import User from '../pages/user'
import PageLayout from '../componets/layout/PageLayout'
const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <Sign_in /> },
      { path: '/profile', element: <User /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
