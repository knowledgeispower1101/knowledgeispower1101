import { createBrowserRouter } from 'react-router-dom';
import { AuthenticationLayout, MainLayout, RequireAuth } from './layouts';
import { CartRoutes, HomeRoutes, PrivateProductRoutes, SearchRoutes, ShopRoutes, PublicProductRoutes, UserRoutes } from '@/features';

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
  {
    element: <AuthenticationLayout />,
    children: [...UserRoutes],
  },
]);
