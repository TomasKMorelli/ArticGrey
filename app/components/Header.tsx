import {
  Search,
  User,
  ShoppingBag,
  CircleUserRound,
  Menu,
  X,
} from 'lucide-react';
import { Link } from '@remix-run/react';
import { useAside } from './Aside';
import { useState } from 'react';

export const Header: React.FC = () => {
  const { open } = useAside();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-20 w-full bg-white shadow px-6 md:px-[24px] py-[20px] ml-[40px] rounded-[8px] max-w-[1520px] mt-[20px]">
      <div className="flex items-center justify-between">
      
        <Link to="/">
          <span className="text-[20px] leading-[100%] font-bold font-Rubik uppercase text-black">
            UNCMFRT.COM
          </span>
        </Link>

       
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <ul className="hidden lg:flex items-center gap-[40px] text-base font-Rubik text-black">
          <Search className="w-5 h-5 cursor-pointer" />
          <Link to="/notFound" className="cursor-pointer">Shop</Link>
          <Link to="/notFound" className="cursor-pointer">Science</Link>
          <Link to="/notFound" className="cursor-pointer">Podcasts</Link>
          <Link to="/notFound" className="cursor-pointer">Trainers</Link>
          <Link to="/notFound" className="cursor-pointer">Blog</Link>
        </ul>

        <div className="hidden lg:flex items-center gap-[30px]">
          <button className="flex items-center h-[45px] px-[16px] pr-[6px] gap-[10px] rounded-[8px] bg-gray-100 text-base text-black">
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
      </div>

    
      {isOpen && (
        <div className="lg:hidden mt-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4 text-base text-black font-Rubik">
            <Link to="/notFound" className="cursor-pointer">Shop</Link>
            <Link to="/notFound" className="cursor-pointer">Science</Link>
            <Link to="/notFound" className="cursor-pointer">Podcasts</Link>
            <Link to="/notFound" className="cursor-pointer">Trainers</Link>
            <Link to="/notFound" className="cursor-pointer">Blog</Link>
          </ul>
          <div className="flex flex-col gap-3">
            <button className="flex items-center h-[45px] px-[16px] pr-[6px] gap-[10px] rounded-[8px] bg-gray-100 text-base text-black">
              Men <CircleUserRound className="w-4 h-4" />
            </button>
            <button className="h-[45px] px-[24px] rounded-[8px] bg-black text-white text-base font-medium">
              Take The Quiz
            </button>
            <div className="flex gap-4">
              <User className="w-5 h-5 cursor-pointer" />
              <ShoppingBag
                className="w-5 h-5 cursor-pointer"
                onClick={() => open('cart')}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
