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
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent flex justify-center">
     <div className="
  w-full 
  max-w-full 
   sm:w-[12115vw]
  md:max-w-[1150px] 
  lg:max-w-[1280px] 
  xl:max-w-[1400px] 
  2xl:max-w-[1520px] 
  mx-auto 
  flex flex-wrap justify-between items-center 
  px-4 sm:px-6 md:px-10 
  h-auto pt-[20px] pb-[20px] mt-[20px] 
  bg-white rounded-[8px]
">

        {/* Logo + Hamburguesa */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link to="/">
            <span className="text-[20px] font-bold font-Rubik uppercase text-black">
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
        </div>

        {/* Navegación desktop */}
        <ul className="hidden lg:flex items-center gap-[40px] text-base font-Rubik text-black">
          <Search className="w-5 h-5 cursor-pointer" />
          <Link to="/notFound">Shop</Link>
          <Link to="/notFound">Science</Link>
          <Link to="/notFound">Podcasts</Link>
          <Link to="/notFound">Trainers</Link>
          <Link to="/notFound">Blog</Link>
        </ul>

        {/* Acciones desktop */}
        <div className="hidden lg:flex items-center gap-[30px]">
          <button className="flex items-center h-[45px] px-[16px] gap-[10px] rounded-[8px] bg-gray-100 text-base text-black">
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

        {/* Menú mobile */}
        {isOpen && (
          <div className="w-full lg:hidden mt-4 bg-black text-white px-4 py-6 rounded-[8px]">
            <ul className="flex flex-col gap-4 text-base font-Rubik">
              <Link to="/notFound">Shop</Link>
              <Link to="/notFound">Science</Link>
              <Link to="/notFound">Podcasts</Link>
              <Link to="/notFound">Trainers</Link>
              <Link to="/notFound">Blog</Link>
            </ul>
            <div className="flex flex-col gap-4 mt-6">
              <button className="flex items-center h-[45px] px-[16px] gap-[10px] rounded-[8px] bg-gray-100 text-black">
                Men <CircleUserRound className="w-4 h-4" />
              </button>
              <button className="h-[45px] px-[24px] rounded-[8px] bg-white text-black font-medium">
                Take The Quiz
              </button>
              <div className="flex gap-4 mt-2">
                <User className="w-5 h-5 cursor-pointer" />
                <ShoppingBag
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => open('cart')}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
