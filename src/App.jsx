import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

// Main Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Dashboard from './pages/admin/Dashboard';

// Info Pages
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import { StoreLocator, CareGuide, SizeGuide, Shipping, TrackOrder } from './pages/InfoPages';

function App() {
  return (
    <StoreProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-[72px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:category" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/admin" element={<Dashboard />} />
              
              {/* Info Routes */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/store-locator" element={<StoreLocator />} />
              <Route path="/care-guide" element={<CareGuide />} />
              <Route path="/size-guide" element={<SizeGuide />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/track" element={<TrackOrder />} />
              <Route path="/privacy" element={<div className="p-20 text-center">Privacy Policy (Demo)</div>} />
              <Route path="/terms" element={<div className="p-20 text-center">Terms of Service (Demo)</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
