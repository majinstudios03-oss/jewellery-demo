import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-serif text-brand-charcoal mb-6">Our Story</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          MAJIN JEWELLERY began as a modern jewellery concept bringing traditional Indian craftsmanship together with contemporary design. We believe that jewellery is more than an accessory—it is a vessel for your most cherished memories.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        <div>
          <img src="https://images.pexels.com/photos/2788554/pexels-photo-2788554.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Workshop" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-serif text-brand-charcoal mb-4">Our Design Philosophy</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Every piece is designed with the modern Indian woman in mind—respectful of heritage, yet forward-looking. We focus on lightweight elegance for daily wear and majestic brilliance for those once-in-a-lifetime moments.
          </p>
          
          <h2 className="text-2xl font-serif text-brand-charcoal mb-4">Craftsmanship</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our fictional demo workshop simulates the highest standards of goldsmithing and stone setting. Every curve, polish, and setting is imagined to be crafted by artisans with generations of experience.
          </p>
          
          <h2 className="text-2xl font-serif text-brand-charcoal mb-4">Quality Promise</h2>
          <p className="text-gray-600 leading-relaxed">
            While this is a demonstration brand, we uphold the idea of ethically sourced diamonds, hallmarked gold, and rigorous quality inspection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
