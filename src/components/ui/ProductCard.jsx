import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const { toggleWishlist, isInWishlist } = useStore();
  const isWished = isInWishlist(product.id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden bg-gray-50 aspect-[4/5] mb-4">
        {product.discount > 0 && (
          <div className="absolute top-3 left-3 bg-brand-charcoal text-white text-xs px-2 py-1 z-10">
            {product.discount}% OFF
          </div>
        )}
        <button 
          onClick={(e) => { e.preventDefault(); toggleWishlist(product); }}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/50 hover:bg-white backdrop-blur-sm transition-colors"
        >
          <Heart className={`w-4 h-4 ${isWished ? 'fill-brand-gold text-brand-gold' : 'text-gray-600'}`} />
        </button>
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {product.images[1] && (
            <img 
              src={product.images[1]} 
              alt={`${product.name} alternate`} 
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          )}
        </Link>
      </div>
      
      <Link to={`/product/${product.id}`} className="flex flex-col flex-grow">
        <h3 className="text-sm font-medium text-brand-charcoal hover:text-brand-gold transition-colors line-clamp-1">{product.name}</h3>
        <p className="text-xs text-gray-500 mb-2">{product.metal}</p>
        <div className="mt-auto flex items-center space-x-2">
          <span className="font-semibold text-brand-charcoal">₹{product.price.toLocaleString('en-IN')}</span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
