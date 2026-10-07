import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import ProductCard from '../components/ui/ProductCard';
import { Search, SlidersHorizontal, X } from 'lucide-react';

const Shop = () => {
  const { category } = useParams();
  const { products } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedMetal, setSelectedMetal] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Featured');

  // Filter and sort logic
  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter(p => p.category === category || p.subcategory === category);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q) || 
        p.subcategory.toLowerCase().includes(q)
      );
    }

    if (selectedMetal !== 'All') {
      filtered = filtered.filter(p => p.metal.includes(selectedMetal));
    }

    switch (selectedSort) {
      case 'Price: Low to High':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'Top Rated':
        filtered.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        break;
      default:
        // Featured (random or id based)
        break;
    }

    return filtered;
  }, [products, category, searchQuery, selectedMetal, selectedSort]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
        <div>
          <h1 className="text-3xl font-serif text-brand-charcoal capitalize">
            {category ? `${category.replace('-', ' ')} Collection` : 'All Jewellery'}
          </h1>
          <p className="text-gray-500 mt-2">{filteredProducts.length} Results</p>
        </div>
        
        <div className="w-full md:w-96 relative">
          <input 
            type="text"
            placeholder="Search jewellery, collections, diamonds..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:outline-none focus:border-brand-gold bg-gray-50 rounded-sm"
          />
          <Search className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute right-3 top-3.5 text-gray-400 hover:text-brand-charcoal">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Filters Sidebar - Mobile Toggle */}
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden flex items-center gap-2 font-medium text-brand-charcoal border border-gray-200 p-3 justify-center"
        >
          <SlidersHorizontal className="w-5 h-5" /> Filters & Sort
        </button>

        {/* Sidebar */}
        <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0 space-y-8`}>
          <div>
            <h3 className="font-medium text-brand-charcoal mb-4">Sort By</h3>
            <select 
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="w-full border border-gray-200 p-3 bg-white focus:outline-none focus:border-brand-gold rounded-sm"
            >
              <option>Featured</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Top Rated</option>
            </select>
          </div>

          <div>
            <h3 className="font-medium text-brand-charcoal mb-4">Metal</h3>
            <div className="space-y-3">
              {['All', '22K Gold', '18K Gold', '925 Silver'].map(metal => (
                <label key={metal} className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="radio" 
                    name="metal"
                    checked={selectedMetal === metal}
                    onChange={() => setSelectedMetal(metal)}
                    className="accent-brand-gold w-4 h-4"
                  />
                  <span className="text-gray-600 text-sm">{metal}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 border border-gray-100 rounded-sm">
              <Search className="w-12 h-12 mx-auto text-gray-300 mb-4" />
              <h2 className="text-2xl font-serif text-brand-charcoal mb-2">We couldn't find that sparkle.</h2>
              <p className="text-gray-500 mb-8">Try adjusting your search or filters.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedMetal('All'); }}
                className="px-6 py-3 bg-brand-charcoal text-white font-medium hover:bg-brand-gold transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
