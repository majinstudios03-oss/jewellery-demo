import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, cartTotal, toggleWishlist } = useStore();

  const handleMoveToWishlist = (product) => {
    toggleWishlist(product);
    removeFromCart(product.id);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <ShoppingBag className="w-16 h-16 mx-auto text-gray-300 mb-6" />
        <h1 className="text-3xl font-serif text-brand-charcoal mb-4">Your Shopping Bag is Empty</h1>
        <p className="text-gray-500 mb-8">Discover our exquisite collections and find your perfect piece.</p>
        <Link to="/shop" className="inline-block px-8 py-4 bg-brand-charcoal text-white font-medium tracking-widest hover:bg-brand-gold transition-colors">
          CONTINUE SHOPPING
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif text-brand-charcoal mb-8 text-center md:text-left">Shopping Bag ({cart.length})</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items */}
        <div className="flex-grow space-y-6">
          {cart.map(item => (
            <motion.div 
              key={item.product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex gap-6 pb-6 border-b border-gray-200"
            >
              <Link to={`/product/${item.product.id}`} className="w-24 h-32 md:w-32 md:h-40 flex-shrink-0 bg-gray-50">
                <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
              </Link>
              
              <div className="flex-grow flex flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <Link to={`/product/${item.product.id}`} className="font-medium text-brand-charcoal hover:text-brand-gold transition-colors text-lg line-clamp-1">
                      {item.product.name}
                    </Link>
                    <button onClick={() => removeFromCart(item.product.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{item.product.metal} • {item.product.size}</p>
                </div>
                
                <div className="flex justify-between items-end">
                  <div className="flex items-center border border-gray-200">
                    <button 
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-brand-charcoal transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-brand-charcoal transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="text-right">
                    <span className="block font-semibold text-brand-charcoal text-lg">₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</span>
                    <button 
                      onClick={() => handleMoveToWishlist(item.product)}
                      className="text-xs text-brand-gold mt-1 hover:underline underline-offset-2"
                    >
                      Move to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Order Summary */}
        <div className="w-full lg:w-96 flex-shrink-0">
          <div className="bg-brand-ivory p-6 md:p-8 sticky top-24 border border-brand-champagne">
            <h2 className="text-xl font-serif text-brand-charcoal mb-6">Order Summary</h2>
            <div className="space-y-4 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-brand-charcoal font-medium">₹{cartTotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-brand-charcoal font-medium text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span className="text-brand-charcoal font-medium">Calculated at checkout</span>
              </div>
            </div>
            <div className="flex justify-between text-lg font-medium text-brand-charcoal mb-8">
              <span>Total</span>
              <span>₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
            
            <button 
              onClick={() => navigate('/checkout')}
              className="w-full py-4 bg-brand-charcoal text-white tracking-widest font-medium hover:bg-brand-gold transition-colors mb-4"
            >
              PROCEED TO CHECKOUT
            </button>
            <p className="text-xs text-center text-gray-500">
              Secure checkout. Demo environment. No actual payment will be processed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
