import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl tracking-widest mb-4">MAJIN <span className="font-light">JEWELLERY</span></h3>
            <p className="text-gray-400 italic mb-6">"Jewellery That Tells Your Story"</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors">
                <span className="text-xs">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors">
                <span className="text-xs">FB</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors">
                <span className="text-xs">YT</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors">
                <span className="text-xs">X</span>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-medium text-lg mb-6 tracking-wide">SHOP</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/shop/gold" className="hover:text-brand-gold transition-colors">Gold</Link></li>
              <li><Link to="/shop/diamond" className="hover:text-brand-gold transition-colors">Diamond</Link></li>
              <li><Link to="/shop/silver" className="hover:text-brand-gold transition-colors">Silver</Link></li>
              <li><Link to="/shop/bridal" className="hover:text-brand-gold transition-colors">Bridal</Link></li>
              <li><Link to="/shop" className="hover:text-brand-gold transition-colors">Rings & Earrings</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-medium text-lg mb-6 tracking-wide">CUSTOMER CARE</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-brand-gold transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-brand-gold transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/track" className="hover:text-brand-gold transition-colors">Track Order</Link></li>
              <li><Link to="/care-guide" className="hover:text-brand-gold transition-colors">Jewellery Care</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="font-medium text-lg mb-6 tracking-wide">NEWSLETTER</h4>
            <p className="text-gray-400 text-sm mb-4">Be the first to discover new collections.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-transparent border-b border-gray-600 py-2 pr-10 text-white focus:outline-none focus:border-brand-gold text-sm placeholder-gray-500 transition-colors"
                required
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-gold">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} MAJIN JEWELLERY. All rights reserved. (Demo Project)</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
