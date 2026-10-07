import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart, wishlist } = useStore();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-brand-ivory/90 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(true)} className="text-brand-charcoal p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-serif font-bold tracking-widest text-brand-charcoal text-center flex-grow md:flex-grow-0">
            MAJIN <span className="font-light">JEWELLERY</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-sm font-medium hover:text-brand-gold transition-colors">Home</Link>
            <Link to="/shop" className="text-sm font-medium hover:text-brand-gold transition-colors">Shop</Link>
            <Link to="/shop/gold" className="text-sm font-medium hover:text-brand-gold transition-colors">Gold</Link>
            <Link to="/shop/diamond" className="text-sm font-medium hover:text-brand-gold transition-colors">Diamond</Link>
            <Link to="/shop/bridal" className="text-sm font-medium hover:text-brand-gold transition-colors">Bridal</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link to="/shop" className="hidden md:block text-brand-charcoal hover:text-brand-gold transition-colors">
              <Search className="w-5 h-5" />
            </Link>
            <Link to="/wishlist" className="relative text-brand-charcoal hover:text-brand-gold transition-colors">
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link to="/admin" className="hidden md:block text-brand-charcoal hover:text-brand-gold transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <Link to="/cart" className="relative text-brand-charcoal hover:text-brand-gold transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {cart.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-brand-ivory z-50 p-6 md:hidden overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-serif text-xl font-bold">MAJIN</span>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-6 h-6 text-brand-charcoal" />
                </button>
              </div>
              <div className="flex flex-col space-y-6">
                <form 
                  onSubmit={(e) => { e.preventDefault(); setMobileMenuOpen(false); window.location.href='/shop'; }} 
                  className="relative mb-4"
                >
                  <input type="text" placeholder="Search..." className="w-full bg-white border border-gray-200 px-4 py-2 pl-10 focus:outline-none focus:border-brand-gold rounded-sm" />
                  <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                </form>
                <Link to="/" className="text-lg border-b border-gray-200 pb-2">Home</Link>
                <Link to="/shop" className="text-lg border-b border-gray-200 pb-2">Shop All</Link>
                <Link to="/shop/gold" className="text-lg border-b border-gray-200 pb-2">Gold</Link>
                <Link to="/shop/diamond" className="text-lg border-b border-gray-200 pb-2">Diamond</Link>
                <Link to="/shop/bridal" className="text-lg border-b border-gray-200 pb-2">Bridal</Link>
                <Link to="/admin" className="text-lg border-b border-gray-200 pb-2">Admin Dashboard</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
