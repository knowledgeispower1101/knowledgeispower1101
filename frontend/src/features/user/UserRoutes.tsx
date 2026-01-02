import { lazy } from 'react';
const Login = lazy(() => import('./pages/Login'));
export const UserRoutes = [
  {
    path: '/login',
    element: <Login />,
    handle: {
      headerVariant: 'login',
    },
  },
];
