import { lazy } from 'react';
const CartPage = lazy(() => import('./pages/CartPage'));
export const CartRoutes = [
  {
    path: '/cart/',
    element: <CartPage />,
    handle: {
      headerVariant: 'cart',
    },
  },
];
