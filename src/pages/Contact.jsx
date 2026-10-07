import { useState } from 'react';
import { Mail, Phone, Clock, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif text-brand-charcoal mb-4">Contact Us</h1>
        <p className="text-gray-500">We're here to help you find your perfect piece.</p>
        <p className="text-brand-gold text-sm mt-2 font-medium">(Demo Information)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-serif text-brand-charcoal mb-8">Get In Touch</h2>
          
          <div className="space-y-6 text-gray-600">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-brand-gold flex-shrink-0" />
              <div>
                <p className="font-medium text-brand-charcoal">Email</p>
                <p>hello@majinjewellery.example</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-brand-gold flex-shrink-0" />
              <div>
                <p className="font-medium text-brand-charcoal">Phone</p>
                <p>+91 90000 00000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-brand-gold flex-shrink-0" />
              <div>
                <p className="font-medium text-brand-charcoal">Hours</p>
                <p>Monday - Saturday</p>
                <p>10:00 AM - 7:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-brand-gold flex-shrink-0" />
              <div>
                <p className="font-medium text-brand-charcoal">Head Office (Demo)</p>
                <p>Jubilee Hills, Hyderabad</p>
                <p>Telangana, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 border border-gray-100 shadow-sm">
          {status === 'success' ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-serif text-brand-charcoal mb-2">Message Sent</h3>
              <p className="text-gray-500">Thank you for reaching out. We will get back to you shortly.</p>
              <button onClick={() => setStatus('idle')} className="mt-8 text-brand-gold hover:underline">Send another message</button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required type="text" placeholder="Your Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-3 border border-gray-300 focus:outline-none focus:border-brand-gold" />
              <div className="grid grid-cols-2 gap-4">
                <input required type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full p-3 border border-gray-300 focus:outline-none focus:border-brand-gold" />
                <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full p-3 border border-gray-300 focus:outline-none focus:border-brand-gold" />
              </div>
              <input required type="text" placeholder="Subject" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full p-3 border border-gray-300 focus:outline-none focus:border-brand-gold" />
              <textarea required placeholder="Your Message" rows="5" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full p-3 border border-gray-300 focus:outline-none focus:border-brand-gold resize-none"></textarea>
              <button disabled={status === 'loading'} type="submit" className="w-full py-4 bg-brand-charcoal text-white tracking-widest font-medium hover:bg-brand-gold transition-colors flex justify-center items-center gap-2">
                {status === 'loading' ? 'SENDING...' : <><Send className="w-4 h-4"/> SEND MESSAGE</>}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
