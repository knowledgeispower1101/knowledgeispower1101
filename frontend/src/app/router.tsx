import { createBrowserRouter } from 'react-router-dom';
import { MainLayout, RequireAuth } from './layouts';
import { CartRoutes, HomeRoutes, PrivateProductRoutes, SearchRoutes, ShopRoutes, PublicProductRoutes } from '@/features';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      ...HomeRoutes,
      ...SearchRoutes,
      ...PublicProductRoutes,
      {
        element: <RequireAuth />,
        children: [...ShopRoutes, ...CartRoutes, ...PrivateProductRoutes],
      },
    ],
  },
]);
