import type { FooterQuery, HeaderQuery } from 'storefrontapi.generated';
import { Link } from '@remix-run/react';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaHeart,
    FaCoffee
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
        <footer className="w-full h-[414px]  mt-[7920px]   bg-[#F6F6F5] font-rubik">
            <div className="flex justify-between mt-25 p-12 ">
                {/* Newsletter Section */}
                <div className="w-[368px]  h-[168px] gap-[32px]">
                    <h2 className="w-[287px] h-[28px] text-[24px] font-semibold leading-[100%] tracking-[0%] mb-3">
                        Be a Part of Our Journey
                    </h2>
                    <p className="w-[400px] h-[52px] text-[16px] font-normal leading-[26px] tracking-[0%] text-footer-text mb-6">
                        Welcome to UNCMFRT. Sign up for exclusive content and we'll send you 10% off.
                    </p>
                    <div className="relative w-[368px] h-[50px]">
  <input
    type="email"
    placeholder="Email Address"
    className="w-full h-[50px] pl-9 pr-[140px] text-[16px] outline-none bg-white border border-black rounded"
  />
  <button
    className="absolute right-0 top-1  h-[50px] bg-black text-white text-[14px] w-[136px] rounded-tr-[8px] rounded-br-[8px] border border-black"
  >
    Subscribe
  </button>
</div>

                </div>

                {/* About Us Column */}
                <div className=' flex w-[772px] h-[204px] ml-10  '>
                    <div className="w-full h-[169px] ">
                        <h3 className="text-[18px] font-semibold mb-4">About Us</h3>
                        <div className="flex flex-col space-y-2">
                            <Link to="/" className="text-footer-text hover:text-black text-[16px] leading-[26px]">Blog</Link>
                            <Link to="/" className="text-footer-text hover:text-black text-[16px] leading-[26px]">Product Reviews</Link>
                            <Link to="/" className="text-footer-text hover:text-black text-[16px] leading-[26px]">Our Story</Link>
                            <Link to="/" className="text-footer-text hover:text-black text-[16px] leading-[26px]">Delivery</Link>
                        </div>
                    </div>

                    {/* Support Column */}
                    <div className="w-full h-[169px] gap-[24px]">
                        <h3 className="text-[18px] font-semibold mb-4">Support</h3>
                        <div className="flex flex-col space-y-2">
                            <Link to="/" className="text-footer-text hover:text-black text-[16px] leading-[26px]">Order Status</Link>
                            <Link to="/" className="text-footer-text hover:text-black text-[16px] leading-[26px]">Help Center</Link>
                            <Link to="/" className="text-footer-text hover:text-black text-[16px] leading-[26px]">Contact Us</Link>
                            <Link to="/" className="text-footer-text hover:text-black text-[16px] leading-[26px]">Returns</Link>
                        </div>
                    </div>

                    {/* Important Link Column */}
                    <div className="w-full h-[169px] ">
                        <h3 className="text-[18px] font-semibold mb-4">Important Link</h3>
                        <div className="flex flex-col space-y-2">
                            <Link to="/" className="text-footer-text hover:text-black text-[16px] leading-[26px]">Maintenance</Link>
                            <Link to="/" className="text-footer-text hover:text-black text-[16px] leading-[26px]">Warranty</Link>
                            <Link to="/" className="text-footer-text hover:text-black text-[16px] leading-[26px]">Canadian Customers</Link>
                            <Link to="/" className="text-footer-text hover:text-black text-[16px] leading-[26px]">Setup</Link>
                        </div>
                    </div>

                    {/* Legal Column */}
                    <div className="w-full h-[199px] ">
                        <h3 className="text-[18px] font-semibold mb-4 ml-5 ">Legal</h3>
                        <div className="flex flex-col space-y-2 ml-5" >
                            <Link to="/" className="text-footer-text hover:text-black text-[16px] leading-[26px]">Privacy Policy</Link>
                            <Link to="/" className="text-footer-text hover:text-black text-[16px] leading-[26px]">Accessibility</Link>
                            <Link to="/" className="text-footer-text hover:text-black text-[16px] leading-[26px]">Terms of Service</Link>
                            <Link to="/" className="text-footer-text hover:text-black text-[16px] leading-[26px]">Affiliate Program</Link>
                            <Link to="/" className="text-footer-text hover:text-black text-[16px] leading-[26px]">Articles</Link>
                        </div>
                    </div>
                </div>



                {/* Contact Us Column */}
                <div className="w-full md:w-auto">
                    <h3 className="text-[18px] font-semibold mb-2">Contact Us</h3>
                    <p className="text-footer-text text-[16px] leading-[26px] mb-1">Let Us Help You</p>
                    <p className="text-[24px] font-semibold mb-6">(888) 860-0572</p>

                    <h4 className="text-[18px] font-semibold ">Connect With Us</h4>
                    <div className="flex gap-[24px]">
                        <Link to="/" className="text-black hover:opacity-80 mt-[36px]">
                            <FaInstagram size={20} />
                        </Link>
                        <Link to="/" className="text-black hover:opacity-80 mt-[36px]">
                            <FaTwitter size={20} />
                        </Link>
                        <Link to="/" className="text-black hover:opacity-80 mt-[36px]">
                            <FaFacebook size={20} />
                        </Link>
                        <Link to="/" className="text-black hover:opacity-80 mt-[36px]">
                            <FaYoutube size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="w-full border-t border-b border-[#E5E5E5] mt-3 bg-[#F6F6F5] ">
                <div className="flex justify-between items-center py-4 px-8">
                    <p className="text-[#666666] text-[14px] leading-[22px] font-normal">
                        © uncmfrt.com. All right reserved.
                    </p>
                    <p className="flex items-center gap-1 text-[14px] leading-[22px] text-[#666666]">
                        Made with <FaHeart className="text-black" size={14} /> and <FaCoffee className="text-black" size={14} /> by Arctic Grey
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;