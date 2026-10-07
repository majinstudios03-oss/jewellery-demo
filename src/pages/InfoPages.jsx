import React from 'react';
import { motion } from 'framer-motion';

export const StoreLocator = () => (
  <div className="max-w-7xl mx-auto px-4 py-20 text-center">
    <h1 className="text-4xl font-serif text-brand-charcoal mb-4">Our Stores</h1>
    <p className="text-gray-500 mb-12">Visit us at any of our demo locations across India.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      {['Hyderabad', 'Bengaluru', 'Mumbai', 'Delhi', 'Chennai', 'Pune'].map(city => (
        <div key={city} className="p-6 border border-gray-200 bg-white shadow-sm">
          <h3 className="text-xl font-serif text-brand-charcoal mb-2">{city} Flagship</h3>
          <p className="text-sm text-gray-500 mb-4">Demo Store Location</p>
          <p className="text-sm text-gray-600 mb-4">123 Luxury Avenue,<br/>Premium Retail District,<br/>{city}, India</p>
          <a href="#" className="text-brand-gold text-sm font-medium hover:underline">Get Directions</a>
        </div>
      ))}
    </div>
  </div>
);

export const CareGuide = () => (
  <div className="max-w-4xl mx-auto px-4 py-20">
    <h1 className="text-4xl font-serif text-brand-charcoal mb-8 text-center">Jewellery Care Guide</h1>
    <div className="space-y-12 text-gray-600 leading-relaxed">
      <section>
        <h2 className="text-2xl font-serif text-brand-charcoal mb-4">Gold Care</h2>
        <p>Pure gold does not tarnish, but it can be smudged or scratched. Keep your gold jewellery in individual pouches or boxes to prevent scratching. Clean it regularly with a few drops of mild dish detergent in warm water.</p>
      </section>
      <section>
        <h2 className="text-2xl font-serif text-brand-charcoal mb-4">Diamond Care</h2>
        <p>Diamonds are durable but can chip on hard impact. They also attract grease. Clean your diamonds regularly using a soft brush, warm water, and mild soap to maintain their brilliance.</p>
      </section>
      <section>
        <h2 className="text-2xl font-serif text-brand-charcoal mb-4">Storage</h2>
        <p>Always store your jewellery in a fabric-lined box or in individual soft cloth pouches. Avoid keeping multiple pieces together to prevent scratching and tangling.</p>
      </section>
    </div>
  </div>
);

export const SizeGuide = () => (
  <div className="max-w-4xl mx-auto px-4 py-20 text-center">
    <h1 className="text-4xl font-serif text-brand-charcoal mb-8">Size Guide</h1>
    <p className="text-gray-600 mb-12">Find your perfect fit with our comprehensive measuring guides.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
      <div className="bg-white p-8 border border-gray-200">
        <h3 className="text-xl font-serif text-brand-charcoal mb-4">Ring Size</h3>
        <p className="text-sm text-gray-600 mb-4">Wrap a piece of string around your finger, mark where the string crosses, and measure the length in millimeters. Compare with our standard Indian ring sizes (10-25).</p>
      </div>
      <div className="bg-white p-8 border border-gray-200">
        <h3 className="text-xl font-serif text-brand-charcoal mb-4">Bangle Size</h3>
        <p className="text-sm text-gray-600 mb-4">Measure the inner diameter of a bangle that fits you well, or measure the circumference of your hand at the widest point (knuckles) to determine your size (2.2, 2.4, 2.6, 2.8).</p>
      </div>
    </div>
  </div>
);

export const Shipping = () => (
  <div className="max-w-3xl mx-auto px-4 py-20">
    <h1 className="text-4xl font-serif text-brand-charcoal mb-8 text-center">Shipping & Returns</h1>
    <p className="text-gray-600 mb-6">We offer free, fully insured shipping on all orders across India. Delivery typically takes 7-10 business days for in-stock items.</p>
    <p className="text-gray-600">If you are not completely satisfied, we accept returns within 15 days of delivery, provided the item is unworn and in its original condition with all tags attached.</p>
  </div>
);

export const TrackOrder = () => (
  <div className="max-w-xl mx-auto px-4 py-24 text-center">
    <h1 className="text-4xl font-serif text-brand-charcoal mb-4">Track Your Order</h1>
    <p className="text-gray-500 mb-8">Enter your demo order number below.</p>
    <input type="text" placeholder="e.g., MJ-ORD-12345" className="w-full p-4 border border-gray-300 focus:outline-none focus:border-brand-gold mb-4" />
    <button className="w-full py-4 bg-brand-charcoal text-white tracking-widest font-medium hover:bg-brand-gold transition-colors">
      TRACK ORDER
    </button>
  </div>
);
