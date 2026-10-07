import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories, collections, products } from '../data/mockData';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Timeless Pieces. Made for Your Moments.",
      subtitle: "Discover jewellery designed to celebrate every story, milestone and unforgettable moment.",
      image: "https://images.pexels.com/photos/3656118/pexels-photo-3656118.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cta: "Shop Gold",
      link: "/shop/gold"
    },
    {
      title: "Something Brilliant Awaits",
      subtitle: "Experience the fire and brilliance of perfectly cut diamonds.",
      image: "https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cta: "Explore Diamonds",
      link: "/shop/diamond"
    },
    {
      title: "For Moments That Matter",
      subtitle: "Heritage designs for your most cherished day.",
      image: "https://images.pexels.com/photos/177332/pexels-photo-177332.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cta: "Discover Bridal",
      link: "/shop/bridal"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-brand-charcoal">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-[10000ms] ease-linear"
              style={{ transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)' }}
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={index === currentSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif text-white max-w-4xl mb-6 leading-tight"
              >
                {slide.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={index === currentSlide ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-white/90 text-lg md:text-xl max-w-2xl mb-10 font-light"
              >
                {slide.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={index === currentSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  to={slide.link}
                  className="px-8 py-4 bg-brand-gold text-white tracking-widest text-sm font-medium hover:bg-brand-charcoal hover:text-white transition-all duration-300 border border-transparent hover:border-white"
                >
                  {slide.cta.toUpperCase()}
                </Link>
                <Link 
                  to="/shop"
                  className="px-8 py-4 bg-transparent text-white tracking-widest text-sm font-medium border border-white hover:bg-white hover:text-brand-charcoal transition-all duration-300"
                >
                  EXPLORE NEW ARRIVALS
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-12 h-1 transition-all duration-300 ${idx === currentSlide ? 'bg-brand-gold' : 'bg-white/50 hover:bg-white/80'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal mb-4">Shop by Category</h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.slice(0, 8).map((cat) => (
            <Link key={cat.id} to={`/shop/${cat.id}`} className="group relative overflow-hidden block h-96">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-serif text-white mb-1">{cat.name}</h3>
                <p className="text-white/80 text-sm font-light">{cat.count} Designs</p>
                <div className="mt-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-brand-gold text-sm font-medium tracking-wide flex items-center">
                    EXPLORE <span className="ml-2">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal mb-4">Featured Collections</h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {collections.map(col => (
              <div key={col.id} className="flex flex-col group cursor-pointer">
                <div className="overflow-hidden relative h-[450px] mb-6">
                  <img src={col.image} alt={col.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="text-2xl font-serif text-brand-charcoal mb-2">{col.name}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{col.description}</p>
                <Link to="/shop" className="text-sm tracking-widest font-medium border-b border-brand-charcoal pb-1 w-max hover:text-brand-gold hover:border-brand-gold transition-colors">
                  DISCOVER MORE
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Brand Story Banner */}
      <section className="py-24 bg-brand-champagne/30 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal mb-6 leading-relaxed">
            "Every piece of jewellery tells a story. We help you tell yours beautifully."
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Experience the fusion of traditional Indian craftsmanship and contemporary elegance.
          </p>
          <Link to="/about" className="inline-block px-8 py-4 bg-brand-charcoal text-white text-sm font-medium tracking-widest hover:bg-brand-gold transition-colors">
            OUR STORY
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
