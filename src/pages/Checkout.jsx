import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { ShieldCheck, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useStore();
  
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    paymentMethod: 'credit_card'
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setOrderNumber(`MJ-ORD-${Math.floor(10000 + Math.random() * 90000)}`);
      clearCart();
    }, 2000);
  };

  if (cart.length === 0 && !isSuccess) {
    return (
      <div className="max-w-3xl mx-auto py-24 px-4 text-center">
        <h1 className="text-2xl font-serif mb-4">Your bag is empty</h1>
        <Link to="/shop" className="text-brand-gold hover:underline">Return to Shop</Link>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto py-24 px-4 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </motion.div>
        <h1 className="text-4xl font-serif text-brand-charcoal mb-4">Your Order Is Confirmed</h1>
        <p className="text-gray-600 mb-2">Thank you for choosing MAJIN JEWELLERY. Your piece is now being prepared with care.</p>
        <p className="font-medium text-brand-charcoal mb-10">Order Number: {orderNumber}</p>
        
        <div className="bg-gray-50 p-6 max-w-md mx-auto text-left mb-10 border border-gray-200">
          <h3 className="font-medium mb-4">Delivery Details</h3>
          <p className="text-sm text-gray-600">{formData.firstName} {formData.lastName}</p>
          <p className="text-sm text-gray-600">{formData.address}, {formData.city}, {formData.state} {formData.pincode}</p>
          <p className="text-sm text-gray-600 mt-4 text-brand-gold">Expected delivery in 7-10 days</p>
        </div>

        <Link to="/shop" className="px-8 py-4 bg-brand-charcoal text-white font-medium hover:bg-brand-gold transition-colors tracking-widest">
          CONTINUE SHOPPING
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Demo Warning Banner */}
      <div className="bg-brand-champagne/30 text-brand-charcoal px-4 py-3 text-center text-sm font-medium mb-8 border border-brand-gold/30 flex items-center justify-center gap-2">
        <ShieldCheck className="w-4 h-4 text-brand-gold" />
        Demo Checkout. No real payments will be processed. Use fictional data.
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Checkout Form */}
        <div className="flex-grow">
          
          {/* Breadcrumb Steps */}
          <div className="flex items-center text-sm mb-8 text-gray-400 font-medium">
            <span className={`${step >= 1 ? 'text-brand-charcoal' : ''}`}>Contact & Delivery</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className={`${step >= 2 ? 'text-brand-charcoal' : ''}`}>Shipping</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className={`${step >= 3 ? 'text-brand-charcoal' : ''}`}>Payment</span>
          </div>

          <form onSubmit={step === 3 ? handlePlaceOrder : handleNextStep} className="space-y-8">
            
            {/* Step 1: Contact & Delivery */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-xl font-serif text-brand-charcoal mb-4">Contact Information</h2>
                <input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="w-full border border-gray-300 p-3 mb-8 focus:outline-none focus:border-brand-gold" />
                
                <h2 className="text-xl font-serif text-brand-charcoal mb-4">Delivery Address</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First name" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-gold" />
                  <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last name" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-gold" />
                </div>
                <input required type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Address" className="w-full border border-gray-300 p-3 mb-4 focus:outline-none focus:border-brand-gold" />
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <input required type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-gold" />
                  <input required type="text" name="state" value={formData.state} onChange={handleInputChange} placeholder="State" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-gold" />
                  <input required type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} placeholder="PIN Code" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-gold" />
                </div>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" className="w-full border border-gray-300 p-3 mb-8 focus:outline-none focus:border-brand-gold" />
                
                <button type="submit" className="w-full py-4 bg-brand-charcoal text-white font-medium tracking-widest hover:bg-brand-gold transition-colors">
                  CONTINUE TO SHIPPING
                </button>
              </motion.div>
            )}

            {/* Step 2: Shipping */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <div className="border border-gray-200 rounded-sm mb-8 divide-y divide-gray-200">
                  <div className="flex justify-between p-4 text-sm">
                    <span className="text-gray-500">Contact</span>
                    <span>{formData.email}</span>
                    <button type="button" onClick={() => setStep(1)} className="text-brand-gold hover:underline">Change</button>
                  </div>
                  <div className="flex justify-between p-4 text-sm">
                    <span className="text-gray-500">Ship to</span>
                    <span>{formData.address}, {formData.city}, {formData.pincode}</span>
                    <button type="button" onClick={() => setStep(1)} className="text-brand-gold hover:underline">Change</button>
                  </div>
                </div>

                <h2 className="text-xl font-serif text-brand-charcoal mb-4">Shipping Method</h2>
                <div className="border border-brand-gold bg-brand-champagne/10 p-4 rounded-sm flex justify-between items-center mb-8 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="radio" checked readOnly className="accent-brand-gold w-4 h-4" />
                    <div>
                      <p className="font-medium">Standard Insured Shipping</p>
                      <p className="text-xs text-gray-500">7-10 Business Days</p>
                    </div>
                  </div>
                  <span className="font-medium">Free</span>
                </div>

                <div className="flex justify-between">
                  <button type="button" onClick={() => setStep(1)} className="text-brand-gold text-sm hover:underline flex items-center">
                    <ChevronRight className="w-4 h-4 rotate-180" /> Return to Information
                  </button>
                  <button type="submit" className="px-8 py-4 bg-brand-charcoal text-white font-medium tracking-widest hover:bg-brand-gold transition-colors">
                    CONTINUE TO PAYMENT
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-xl font-serif text-brand-charcoal mb-4">Payment Method</h2>
                <p className="text-sm text-gray-500 mb-6">All transactions are secure and encrypted. (Demo mode)</p>
                
                <div className="border border-gray-200 rounded-sm divide-y divide-gray-200 mb-8">
                  <label className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="paymentMethod" value="credit_card" checked={formData.paymentMethod === 'credit_card'} onChange={handleInputChange} className="accent-brand-gold w-4 h-4" />
                    <span className="font-medium text-brand-charcoal">Credit / Debit Card</span>
                  </label>
                  {formData.paymentMethod === 'credit_card' && (
                    <div className="p-4 bg-gray-50 space-y-4 border-y border-gray-200">
                      <input type="text" placeholder="Card number" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-gold" />
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="Expiration date (MM/YY)" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-gold" />
                        <input type="text" placeholder="Security code" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-gold" />
                      </div>
                      <input type="text" placeholder="Name on card" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-gold" />
                    </div>
                  )}
                  
                  <label className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="paymentMethod" value="upi" checked={formData.paymentMethod === 'upi'} onChange={handleInputChange} className="accent-brand-gold w-4 h-4" />
                    <span className="font-medium text-brand-charcoal">UPI / QR</span>
                  </label>
                  
                  <label className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="paymentMethod" value="net_banking" checked={formData.paymentMethod === 'net_banking'} onChange={handleInputChange} className="accent-brand-gold w-4 h-4" />
                    <span className="font-medium text-brand-charcoal">Net Banking</span>
                  </label>
                </div>

                <div className="flex justify-between items-center">
                  <button type="button" onClick={() => setStep(2)} className="text-brand-gold text-sm hover:underline flex items-center">
                    <ChevronRight className="w-4 h-4 rotate-180" /> Return to Shipping
                  </button>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-brand-charcoal text-white font-medium tracking-widest hover:bg-brand-gold transition-colors flex items-center gap-2 disabled:bg-gray-400"
                  >
                    {isSubmitting ? 'PROCESSING...' : `PAY ₹${cartTotal.toLocaleString('en-IN')}`}
                  </button>
                </div>
              </motion.div>
            )}

          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="w-full lg:w-96 flex-shrink-0">
          <div className="bg-gray-50 p-6 md:p-8 border border-gray-200 lg:sticky lg:top-24">
            <h3 className="font-serif text-lg mb-6 text-brand-charcoal">Order Summary</h3>
            
            <div className="space-y-4 mb-6 pb-6 border-b border-gray-300 max-h-64 overflow-y-auto pr-2">
              {cart.map(item => (
                <div key={item.product.id} className="flex gap-4">
                  <div className="relative w-16 h-16 bg-white border border-gray-100 flex-shrink-0">
                    <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                    <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <span className="text-sm font-medium text-brand-charcoal line-clamp-1">{item.product.name}</span>
                    <span className="text-sm text-gray-500">₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-brand-charcoal">₹{cartTotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span className="font-medium text-brand-charcoal">Included</span>
              </div>
            </div>
            
            <div className="flex justify-between text-xl font-medium text-brand-charcoal">
              <span>Total</span>
              <span><span className="text-sm text-gray-500 font-normal mr-1">INR</span>₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
