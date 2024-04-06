import App from "./App"

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import Counter from "./features/counter/Counter"
import Dashboard from "./features/dashboard/Dashboard"

const RouterWrap = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <div>Oops! There was an error.</div>,
      children: [
        {
          errorElement: <div>Oops! There was an error.</div>,
          children: [
            {
              path: "dashboard",
              element: <Dashboard />,
            },
            {
              path: "todo",
              element: <div>Todo</div>,
            },
            {
              path: "*",
              element: <Navigate to="/" replace={true} />,
            },
          ],
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default RouterWrap
