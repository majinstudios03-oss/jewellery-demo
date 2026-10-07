import { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { adminStats } from '../../data/mockData';
import { TrendingUp, Users, ShoppingBag, DollarSign, Package } from 'lucide-react';

const Dashboard = () => {
  const { products } = useStore();
  const [activeTab, setActiveTab] = useState('overview');

  const StatCard = ({ title, value, icon: Icon, trend }) => (
    <div className="bg-white p-6 border border-gray-100 shadow-sm rounded-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-semibold text-brand-charcoal">{value}</h3>
        </div>
        <div className="p-3 bg-brand-champagne/30 rounded-full text-brand-gold">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div className="text-sm">
        <span className="text-green-500 font-medium flex items-center gap-1">
          <TrendingUp className="w-3 h-3" /> {trend}
        </span>
        <span className="text-gray-400 ml-2">vs last month</span>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-serif text-brand-charcoal mb-2">Admin Dashboard</h1>
            <p className="text-gray-500">Welcome back, Super Admin</p>
          </div>
          <div className="bg-brand-charcoal text-white text-xs px-3 py-1 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400"></span> Live (Demo Mode)
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 border-b border-gray-200">
          {['overview', 'products', 'orders', 'customers'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium capitalize transition-colors border-b-2 ${
                activeTab === tab 
                  ? 'border-brand-gold text-brand-gold' 
                  : 'border-transparent text-gray-500 hover:text-brand-charcoal'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard title="Total Revenue" value={`₹${adminStats.revenue.toLocaleString('en-IN')}`} icon={DollarSign} trend="+12.5%" />
              <StatCard title="Total Orders" value={adminStats.orders} icon={ShoppingBag} trend="+8.2%" />
              <StatCard title="Total Customers" value={adminStats.customers} icon={Users} trend="+15.3%" />
              <StatCard title="Products in Store" value={adminStats.products} icon={Package} trend="+2.4%" />
            </div>

            <div className="bg-white border border-gray-100 p-6 rounded-sm shadow-sm">
              <h3 className="text-lg font-medium text-brand-charcoal mb-6">Recent Orders (Mock Data)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-y border-gray-100">
                    <tr>
                      <th className="px-6 py-4">Order ID</th>
                      <th className="px-6 py-4">Customer</th>
                      <th className="px-6 py-4">Amount</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <tr key={i} className="bg-white border-b border-gray-50 hover:bg-gray-50/50">
                        <td className="px-6 py-4 font-medium">#MJ-{9000 + i}</td>
                        <td className="px-6 py-4">Customer {i}</td>
                        <td className="px-6 py-4">₹{(80000 * i).toLocaleString('en-IN')}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${i % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {i % 2 === 0 ? 'Delivered' : 'Processing'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-500">Oct {15 - i}, 2023</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="bg-white border border-gray-100 rounded-sm shadow-sm">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-lg font-medium text-brand-charcoal">Inventory Management</h3>
              <button className="bg-brand-charcoal text-white px-4 py-2 text-sm">Add Product</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-y border-gray-100">
                  <tr>
                    <th className="px-6 py-4">Product</th>
                    <th className="px-6 py-4">SKU</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Price</th>
                    <th className="px-6 py-4">Stock</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {products.slice(0, 10).map((product) => (
                    <tr key={product.id} className="bg-white border-b border-gray-50 hover:bg-gray-50/50">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <img src={product.images[0]} alt={product.name} className="w-10 h-10 object-cover" />
                        <span className="font-medium truncate max-w-[200px]" title={product.name}>{product.name}</span>
                      </td>
                      <td className="px-6 py-4 text-gray-500">{product.sku}</td>
                      <td className="px-6 py-4 capitalize">{product.category}</td>
                      <td className="px-6 py-4">₹{product.price.toLocaleString('en-IN')}</td>
                      <td className="px-6 py-4">
                        <span className={`${product.stock < 5 ? 'text-red-500 font-medium' : 'text-gray-700'}`}>
                          {product.stock} units
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-800 px-2 py-1 text-xs rounded-full">Active</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Dashboard;
