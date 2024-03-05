import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MyAppBar from './components/appbar/MyAppBar.tsx'
import Index from './components/index/Index.tsx'
import ErrorPage from './components/error/ErrorPage.tsx'
import LoadingShowcase from './components/animatedloading/LoadingShowcase.tsx'

const router = createBrowserRouter([{ 
  path: '/', 
  element:  <Index />, 
  errorElement: <ErrorPage />
},
{
  path: '/loader',
  element: <LoadingShowcase />,
  errorElement: <ErrorPage />
},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    //Here might be some reload problems (wip)
    <MyAppBar />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
