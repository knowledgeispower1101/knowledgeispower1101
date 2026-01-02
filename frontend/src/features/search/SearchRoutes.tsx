import { lazy } from 'react';
const SearchPage = lazy(() => import('./pages/SearchPage'));
export const SearchRoutes = [
  {
    path: '/search/:q',
    element: <SearchPage />,
  },
];
