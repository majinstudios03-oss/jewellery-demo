import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { Heart, Trash2, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const Wishlist = () => {
  const { wishlist, toggleWishlist, addToCart } = useStore();

  const handleMoveToCart = (product) => {
    addToCart(product);
    toggleWishlist(product);
  };

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <Heart className="w-16 h-16 mx-auto text-gray-300 mb-6" />
        <h1 className="text-3xl font-serif text-brand-charcoal mb-4">Your Wishlist is Empty</h1>
        <p className="text-gray-500 mb-8">Save your favorite pieces and they'll be waiting for you here.</p>
        <Link to="/shop" className="inline-block px-8 py-4 bg-brand-charcoal text-white font-medium tracking-widest hover:bg-brand-gold transition-colors">
          DISCOVER JEWELLERY
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif text-brand-charcoal mb-8 text-center md:text-left">Your Wishlist ({wishlist.length})</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlist.map(product => (
          <motion.div 
            key={product.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="group flex flex-col border border-gray-100 bg-white"
          >
            <div className="relative overflow-hidden bg-gray-50 aspect-[4/5]">
              <button 
                onClick={(e) => { e.preventDefault(); toggleWishlist(product); }}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm transition-colors text-brand-gold"
              >
                <Heart className="w-4 h-4 fill-current" />
              </button>
              <Link to={`/product/${product.id}`}>
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </Link>
            </div>
            
            <div className="p-4 flex flex-col flex-grow">
              <Link to={`/product/${product.id}`}>
                <h3 className="text-sm font-medium text-brand-charcoal hover:text-brand-gold transition-colors line-clamp-1">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{product.metal}</p>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="font-semibold text-brand-charcoal">₹{product.price.toLocaleString('en-IN')}</span>
                </div>
              </Link>
              
              <div className="mt-auto flex gap-2">
                <button 
                  onClick={() => handleMoveToCart(product)}
                  className="flex-grow py-2.5 bg-brand-charcoal text-white text-xs font-medium tracking-wider hover:bg-brand-gold transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" /> MOVE TO BAG
                </button>
                <button 
                  onClick={() => toggleWishlist(product)}
                  className="px-3 py-2.5 border border-gray-200 text-gray-500 hover:text-red-500 hover:border-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
