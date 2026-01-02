import { Outlet } from 'react-router-dom';

export const RequireAuth = () => {
  //   const { user, isLoading } = useAuth();
  //   const location = useLocation();
  // console.log('Require Auth');
  //   if (isLoading) return <div>Loading...</div>;

  //   if (!user) return <Navigate to="/login" replace state={{ from: location }} />;

  return <Outlet />;
};
