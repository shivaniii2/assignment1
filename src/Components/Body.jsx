import React from 'react'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import { Home } from './Home'
import { AddResource } from './AddResource'


export const appRouter = createBrowserRouter(
    [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: 'addResource',
            element: <AddResource />,
          },
        ],
      },
    ],
    {
      basename: '/assignment1',
    }
  );
  
  export const Body = ({ loading }) => {
    return <></>;
  };