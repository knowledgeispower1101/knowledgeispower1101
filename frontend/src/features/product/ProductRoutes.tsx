import { lazy } from 'react';
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const PrivateProductRoutes = [
  {
    path: '/product/:id',
    element: <ProductDetailPage />,
  },
];
const PublicProductRoutes = [{}];

export { PrivateProductRoutes, PublicProductRoutes };
