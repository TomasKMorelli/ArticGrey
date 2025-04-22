import {
  Search,
  User,
  ShoppingBag,
  CircleUserRound,
} from 'lucide-react';
import { Link } from '@remix-run/react';
import { useAside } from './Aside'; 

export const Header: React.FC = () => {
  const { open } = useAside(); 

  return (
    <nav className="sticky top-0 z-10 w-full max-w-[1620px] mx-auto mt-[20px] pt-[14px] pb-[20px] px-4 rounded-[8px] flex flex-wrap items-center justify-between bg-white shadow gap-y-4">

   
      <div className="flex items-center gap-4 min-w-[180px]">
        <Link to="/">
          <span className="font-bold text-lg whitespace-nowrap">
            UNCMFRT.COM
          </span>
        </Link>
      </div>

      
      <ul className="flex flex-wrap justify-center gap-4 text-base text-black flex-1 basis-full sm:basis-auto sm:flex sm:justify-center">
        <Search className="w-5 h-5 cursor-pointer" />
        <Link to="/notFound" className="cursor-pointer">Shop</Link>
        <Link to="/notFound" className="cursor-pointer font-Rubik">Science</Link>
        <Link to="/notFound" className="cursor-pointer">Podcasts</Link>
        <Link to="/notFound" className="cursor-pointer">Trainers</Link>
        <Link to="/notFound" className="cursor-pointer">Blog</Link>
      </ul>

      
      <div className="flex items-center gap-4 min-w-[180px] justify-end flex-wrap">
        <button className="flex items-center justify-center h-[45px] px-[16px] pr-[6px] gap-[10px] rounded-[8px] bg-gray-100 text-base">
          Men <CircleUserRound className="w-4 h-4" />
        </button>
        <button className="h-[45px] px-[24px] rounded-[8px] bg-black text-white text-base font-medium">
          Take The Quiz
        </button>
        <User className="w-5 h-5 cursor-pointer" />
        <ShoppingBag
          className="w-5 h-5 cursor-pointer"
          onClick={() => open('cart')}
        />
      </div>
    </nav>
  );
};

export default Header;
