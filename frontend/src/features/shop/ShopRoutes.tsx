import { lazy } from 'react';
const ShopPage = lazy(() => import('./pages/ShopPage'));
export const ShopRoutes = [
  {
    path: '/shop/:id',
    element: <ShopPage />,
    handle: {
      headerVariant: 'shop',
    },
  },
];
