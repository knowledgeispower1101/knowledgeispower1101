import { useGetPath, type HeaderVariant } from '@/shared';
import SearchSection from './SearchSection';
import { CartIcon } from '@/features/cart';
import { cn } from '@/lib/utils';
import Logo from './Logo';

const HEADER_BG: Record<HeaderVariant, string> = {
  default: 'bg-[#F6412D]',
  cart: 'bg-white',
  shop: 'bg-[#D0011C]',
  login: 'bg-white',
};

const Header = () => {
  const variant = useGetPath();
  console.log(variant);
  const isCartPage = variant === 'cart';
  if (variant === 'login')
    return (
      <header className={cn('w-full transition-colors duration-200 ', HEADER_BG[variant])}>
        <div className="max-w-300 mx-auto h-21.25 flex items-center justify-between pt-4 pb-2.5">
          <div className="pr-10 flex justify-around items-end">
            <Logo variant={variant} />
            <div className="ml-3.75 mb-px h-7.5 border-l border-[#ee4d2d] pl-3.75 text-[1.25rem] leading-7.5  capitalize">Đăng Nhập</div>
          </div>
          <div className="text-[#ee4d2d] cursor-pointer text-sm mr-3.75">Bạn cần giúp đỡ?</div>
        </div>
      </header>
    );

  if (variant === 'cart')
    return (
      <header className={cn('w-full transition-colors duration-200', HEADER_BG[variant], variant === 'cart' && 'border-b border-[#00000017]')}>
        <div className="max-w-300 mx-auto h-21.25 flex items-center justify-between pt-4 pb-2.5">
          <div className="pr-10 flex justify-between items-end">
            <Logo variant={variant} />
            <div className="ml-3.75 mb-px h-7.5 border-l border-[#ee4d2d] pl-3.75 text-[1.25rem] leading-7.5 text-[#ee4d2d] capitalize">Giỏ hàng</div>
          </div>
        </div>
      </header>
    );
  return (
    <header className={cn('w-full transition-colors duration-200', HEADER_BG[variant])}>
      <div className="max-w-300 mx-auto h-21.25 flex items-center justify-between pt-4 pb-2.5">
        <div className="pr-10 flex justify-between items-end">
          <Logo variant={variant} />
        </div>
        {!isCartPage && <SearchSection />}
        {!isCartPage && <CartIcon />}
      </div>
    </header>
  );
};
export default Header;
