import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { Heart, ShoppingBag, ShieldCheck, Truck, Star, Check } from 'lucide-react';
import { reviews } from '../data/mockData';
import { motion } from 'framer-motion';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart, toggleWishlist, isInWishlist } = useStore();
  const product = products.find(p => p.id === id) || products[0];
  
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const isWished = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/checkout');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-8 flex gap-2 capitalize">
        <Link to="/" className="hover:text-brand-gold">Home</Link> / 
        <Link to={`/shop/${product.category}`} className="hover:text-brand-gold">{product.category}</Link> / 
        <span className="text-brand-charcoal">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Images */}
        <div className="flex gap-4">
          <div className="w-20 flex flex-col gap-4">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`border-2 ${activeImage === idx ? 'border-brand-gold' : 'border-transparent'} overflow-hidden transition-colors`}
              >
                <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover aspect-square" />
              </button>
            ))}
          </div>
          <div className="flex-grow bg-gray-50 aspect-[4/5] relative overflow-hidden group">
            <motion.img 
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={product.images[activeImage]} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-150 cursor-crosshair origin-center"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-4">
            <span className="text-xs tracking-widest text-brand-gold font-medium bg-brand-champagne/30 px-2 py-1">MADE TO ORDER</span>
          </div>
          <h1 className="text-3xl font-serif text-brand-charcoal mb-2">{product.name}</h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-semibold text-brand-charcoal">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice > product.price && (
              <span className="text-gray-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            )}
            <div className="flex items-center gap-1 text-sm text-brand-gold ml-auto border border-gray-200 px-2 py-1">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-medium">{product.rating}</span>
              <span className="text-gray-500">({product.reviewCount})</span>
            </div>
          </div>

          <p className="text-gray-600 font-light mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm mb-8 border-y border-gray-100 py-6">
            <div><span className="text-gray-500">Metal:</span> <span className="font-medium text-brand-charcoal">{product.metal}</span></div>
            <div><span className="text-gray-500">Purity:</span> <span className="font-medium text-brand-charcoal">{product.purity}</span></div>
            <div><span className="text-gray-500">Weight:</span> <span className="font-medium text-brand-charcoal">{product.weight}</span></div>
            <div><span className="text-gray-500">Stone:</span> <span className="font-medium text-brand-charcoal">{product.stone}</span></div>
          </div>

          <div className="flex gap-4 mb-8">
            <button 
              onClick={handleAddToCart}
              className={`flex-1 py-4 flex items-center justify-center gap-2 border font-medium tracking-wide transition-colors ${
                added ? 'bg-green-50 text-green-700 border-green-200' : 'bg-transparent text-brand-charcoal border-brand-charcoal hover:bg-brand-charcoal hover:text-white'
              }`}
            >
              {added ? <><Check className="w-5 h-5"/> ADDED TO BAG</> : <><ShoppingBag className="w-5 h-5"/> ADD TO BAG</>}
            </button>
            <button 
              onClick={handleBuyNow}
              className="flex-1 py-4 bg-brand-gold text-white font-medium tracking-wide border border-brand-gold hover:bg-brand-charcoal hover:border-brand-charcoal transition-colors"
            >
              BUY NOW
            </button>
            <button 
              onClick={() => toggleWishlist(product)}
              className="w-14 flex items-center justify-center border border-gray-200 hover:border-brand-gold transition-colors"
            >
              <Heart className={`w-5 h-5 ${isWished ? 'fill-brand-gold text-brand-gold' : 'text-gray-600'}`} />
            </button>
          </div>

          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-gray-400" />
              <span>Free insured delivery in 7-10 days</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-gray-400" />
              <span>Lifetime Exchange & Buyback | {product.warranty} Warranty</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Details & Reviews Tabs */}
      <div className="mt-24 border-t border-gray-200 pt-16">
        <div className="flex gap-8 mb-10 border-b border-gray-200 pb-2">
          <h3 className="text-xl font-serif text-brand-charcoal border-b-2 border-brand-gold pb-2 -mb-2.5">Product Details</h3>
          <h3 className="text-xl font-serif text-gray-400 pb-2">Customer Reviews</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h4 className="font-medium text-brand-charcoal mb-4">Specifications</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex justify-between border-b border-gray-100 pb-2"><span>SKU</span> <span>{product.sku}</span></li>
              <li className="flex justify-between border-b border-gray-100 pb-2"><span>Category</span> <span className="capitalize">{product.category}</span></li>
              <li className="flex justify-between border-b border-gray-100 pb-2"><span>Dimensions</span> <span>{product.dimensions}</span></li>
              <li className="flex justify-between border-b border-gray-100 pb-2"><span>Size</span> <span>{product.size}</span></li>
            </ul>
            <h4 className="font-medium text-brand-charcoal mt-8 mb-4">Care Instructions</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{product.careInstructions}</p>
          </div>
          
          <div>
            <h4 className="font-medium text-brand-charcoal mb-6">Recent Reviews</h4>
            <div className="space-y-8">
              {reviews.slice(0,3).map(review => (
                <div key={review.id} className="border-b border-gray-100 pb-6">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex gap-3 items-center">
                      <img src={review.avatar} alt={review.customer} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <p className="font-medium text-brand-charcoal text-sm">{review.customer}</p>
                        <p className="text-xs text-brand-gold flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Verified Purchase</p>
                      </div>
                    </div>
                    <div className="flex text-brand-gold">
                      {[...Array(5)].map((_, i) => <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} />)}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
