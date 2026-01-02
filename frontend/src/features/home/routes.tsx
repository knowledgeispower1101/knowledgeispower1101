// features/home/routes.tsx
import { lazy } from 'react';
const HomePage = lazy(() => import('./pages/HomePage'));
export const HomeRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
];
