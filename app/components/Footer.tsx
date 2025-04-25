import type { FooterQuery, HeaderQuery } from 'storefrontapi.generated';
import { Link } from '@remix-run/react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaHeart,
  FaCoffee,
} from 'react-icons/fa';

interface FooterProps {
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  publicStoreDomain: string;
}

export const Footer = ({
  footer,
  header,
  publicStoreDomain,
}: FooterProps) => {
  return (
    <footer className="w-full bg-[#F6F6F5] font-rubik">
      <div className="flex flex-wrap lg:flex-nowrap justify-between px-10 py-6 gap-10 max-w-[1820px] mx-auto">
     
        <div className="w-full lg:w-[368px] flex flex-col">
          <h2 className="text-xl font-semibold mb-3">Be a Part of Our Journey</h2>
          <p className="text-sm text-footer-text leading-6 mb-6 max-w-[400px]">
            Welcome to UNCMFRT. Sign up for exclusive content and we'll send you 10% off.
          </p>
          <div className="relative w-full max-w-[368px] h-[50px] mt-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-full pl-4 pr-[140px] text-sm bg-white border border-black rounded outline-none"
            />
            <button className="absolute right-0 top-0 h-full w-[136px] bg-black text-white text-sm font-medium rounded-tr-[4px] rounded-br-[4px] border border-black">
              Subscribe
            </button>
          </div>
        </div>

      
       <div className="flex  justify-around w-full lg:w-[792px] gap-y-8 ">

          {[
            {
              title: 'About Us',
              links: ['Blog', 'Product Reviews', 'Our Story', 'Delivery'],
            },
            {
              title: 'Support',
              links: ['Order Status', 'Help Center', 'Contact Us', 'Returns'],
            },
            {
              title: 'Important Link',
              links: ['Maintenance', 'Warranty', 'Canadian Customers', 'Setup'],
            },
            {
              title: 'Legal',
              links: ['Privacy Policy', 'Accessibility', 'Terms of Service', 'Affiliate Program', 'Articles'],
            },
          ].map((section, i) => (
            <div key={i} className="w-[48%] md:w-[22%]">
              <h3 className="text-base font-semibold mb-4">{section.title}</h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      to="/"
                      className="text-footer-text hover:text-black text-sm leading-6"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-auto">
          <h3 className="text-base font-semibold mb-5">Contact Us</h3>
          <p className="text-sm text-footer-text mb-1">Let Us Help You</p>
          <p className="text-2xl font-semibold">(888) 860-0572</p>
          <h4 className="text-base font-semibold mt-6">Connect With Us</h4>
          <div className="flex gap-6 mt-4">
            {[FaInstagram, FaTwitter, FaFacebook, FaYoutube].map((Icon, i) => (
              <Link to="/" key={i} className="text-black hover:opacity-80">
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-b border-[#E5E5E5] bg-[#F6F6F5]">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 gap-2 text-[#666666] text-sm">
          <p className="text-center md:text-left">© uncmfrt.com. All right reserved.</p>
          <p className="flex items-center gap-1 justify-center">
            Made with <FaHeart className="text-black" size={14} /> and <FaCoffee className="text-black" size={14} /> by Arctic Grey
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
