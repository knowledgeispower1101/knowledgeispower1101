import { useGetPath, type HeaderVariant } from '@/shared';
import SearchSection from './SearchSection';
import { CartIcon } from '@/features/cart';
import { cn } from '@/lib/utils';
import Logo from './Logo';

const HEADER_BG: Record<HeaderVariant, string> = {
  default: 'bg-[#F6412D]',
  cart: 'bg-white',
  shop: 'bg-[#D0011C]',
};

const Header = () => {
  const variant = useGetPath();
  const isCartPage = variant === 'cart';

  return (
    <header className={cn('w-full transition-colors duration-200', HEADER_BG[variant], variant === 'cart' && 'border-b border-[#00000017]')}>
      <div className="max-w-300 mx-auto h-21.25 flex items-center justify-between pt-4 pb-2.5">
        <div className="pr-10 flex justify-between items-end">
          <Logo variant={variant} />
          {isCartPage && (
            <div className="ml-3.75 mb-px h-7.5 border-l border-[#ee4d2d] pl-3.75 text-[1.25rem] leading-7.5 text-[#ee4d2d] capitalize">Giỏ hàng</div>
          )}
        </div>
        {!isCartPage && <SearchSection />}
        {!isCartPage && <CartIcon />}
      </div>
    </header>
  );
};

export default Header;
