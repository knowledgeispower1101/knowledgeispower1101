import { lazy } from 'react';
const CategorySection = lazy(() => import('../../home/components/CategorySection'));
const FlashSaleCarousel = lazy(() => import('../../home/components/FlashSaleCarousel'));

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <CategorySection />
      <FlashSaleCarousel />
    </div>
  );
};

export default HomePage;
