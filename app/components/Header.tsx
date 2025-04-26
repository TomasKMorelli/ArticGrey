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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="xl:w-[1320px] 2xl:w-[1520px]  h-[70px] mt-5 mx-auto flex items-center justify-between rounded-lg px-6 py-5 bg-white shadow-md relative z-50">
      <div className="flex items-center gap-6">
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="text-xl font-bold uppercase">uncmfrt.com</h1>
      </div>
      <ul className="hidden lg:flex gap-8 text-sm absolute left-1/2 transform -translate-x-1/2">
        <li className="hover:underline cursor-pointer">Shop</li>
        <li className="hover:underline cursor-pointer">Science</li>
        <li className="hover:underline cursor-pointer">Podcasts</li>
        <li className="hover:underline cursor-pointer">Trainers</li>
        <li className="hover:underline cursor-pointer">Blog</li>
      </ul>
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-2">
          <button className="flex items-center gap-1 px-4 py-2 rounded-full border">
            Men
          </button>
          <button className="px-4 py-2 rounded-full bg-black text-white">
            Take The Quiz
          </button>
        </div>
        <User size={20} className="cursor-pointer" />
        <button onClick={()=> open("cart")}>
        <ShoppingBag size={20} className="cursor-pointer" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md rounded-lg p-4 flex flex-col gap-4 lg:hidden z-50">
          <ul className="flex flex-col gap-4 text-sm">
            <li className="hover:underline cursor-pointer">Shop</li>
            <li className="hover:underline cursor-pointer">Science</li>
            <li className="hover:underline cursor-pointer">Podcasts</li>
            <li className="hover:underline cursor-pointer">Trainers</li>
            <li className="hover:underline cursor-pointer">Blog</li>
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            <button className="flex items-center justify-center gap-1 px-4 py-2 rounded-full border">
              Men
            </button>
            <button className="px-4 py-2 rounded-full bg-black text-white">
              Take The Quiz
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Header;