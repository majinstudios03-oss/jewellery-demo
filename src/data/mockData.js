export const categories = [
  { id: 'gold', name: 'Gold Jewellery', description: 'Classic and contemporary designs crafted for everyday elegance.', count: 24, image: 'https://images.pexels.com/photos/3656118/pexels-photo-3656118.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'diamond', name: 'Diamond Jewellery', description: 'Brilliance, cut to perfection. Discover our diamond collection.', count: 18, image: 'https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'necklaces', name: 'Necklaces', description: 'Statement pieces and delicate chains for every neckline.', count: 15, image: 'https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'earrings', name: 'Earrings', description: 'From elegant studs to magnificent drops.', count: 22, image: 'https://images.pexels.com/photos/177332/pexels-photo-177332.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'rings', name: 'Rings', description: 'Bands of love and statement rings.', count: 19, image: 'https://images.pexels.com/photos/2788554/pexels-photo-2788554.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'bridal', name: 'Bridal Jewellery', description: 'Your big day deserves something extraordinary.', count: 12, image: 'https://images.pexels.com/photos/5466487/pexels-photo-5466487.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'silver', name: 'Silver Jewellery', description: 'Contemporary and oxidised silver artistry.', count: 10, image: 'https://images.pexels.com/photos/1359341/pexels-photo-1359341.jpeg?auto=compress&cs=tinysrgb&w=800' }
];

export const collections = [
  { id: 'everyday-edit', name: 'The Everyday Edit', description: 'Lightweight, modern pieces for daily wear.', image: 'https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'bridal-heritage', name: 'Bridal Heritage', description: 'Timeless designs for your special day.', image: 'https://images.pexels.com/photos/5466487/pexels-photo-5466487.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'diamond-dreams', name: 'Diamond Dreams', description: 'Unmatched brilliance and clarity.', image: 'https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&w=800' }
];

const getImage = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

const staticProducts = [
  {
    id: "MJ-1001", sku: "SKU-GOLD-101", category: "gold", subcategory: "necklace", metal: "22K Gold",
    name: "Classic 22K Gold Necklace",
    shortDescription: "Elegant traditional gold necklace.", description: "A beautifully crafted 22K gold necklace with intricate traditional detailing, perfect for festive occasions and weddings.",
    price: 85000, originalPrice: 95000, discount: 10, purity: "916", weight: "18.5g", stone: "None", stoneWeight: "N/A", size: "Standard",
    images: [getImage("3656118"), getImage("3656118"), getImage("3656118")]
  },
  {
    id: "MJ-1002", sku: "SKU-DIAMOND-102", category: "diamond", subcategory: "ring", metal: "18K Gold",
    name: "Diamond Solitaire Engagement Ring",
    shortDescription: "Brilliant round-cut diamond solitaire ring.", description: "A stunning 18K white gold engagement ring featuring a perfectly cut brilliant diamond solitaire.",
    price: 120000, originalPrice: 135000, discount: 11, purity: "750", weight: "4.2g", stone: "Diamond", stoneWeight: "1.00 ct", size: "12",
    images: [getImage("266621"), getImage("266621"), getImage("266621")]
  },
  {
    id: "MJ-1003", sku: "SKU-DIAMOND-103", category: "diamond", subcategory: "earring", metal: "18K Gold",
    name: "Diamond Drop Earrings",
    shortDescription: "Elegant diamond drop earrings for evening wear.", description: "Sophisticated diamond drop earrings set in 18K white gold, designed to catch the light beautifully.",
    price: 95000, originalPrice: 110000, discount: 13, purity: "750", weight: "6.5g", stone: "Diamond", stoneWeight: "1.50 ct", size: "Standard",
    images: [getImage("177332"), getImage("177332"), getImage("177332")]
  },
  {
    id: "MJ-1004", sku: "SKU-GOLD-104", category: "gold", subcategory: "bracelet", metal: "22K Gold",
    name: "Traditional Gold Bangle",
    shortDescription: "Classic 22K gold bangle with fine detailing.", description: "A traditional Indian gold bangle crafted in 22K yellow gold with timeless motifs.",
    price: 65000, originalPrice: 70000, discount: 7, purity: "916", weight: "12.0g", stone: "None", stoneWeight: "N/A", size: "2.4",
    images: [getImage("248077"), getImage("248077"), getImage("248077")]
  },
  {
    id: "MJ-1005", sku: "SKU-DIAMOND-105", category: "diamond", subcategory: "necklace", metal: "18K Gold",
    name: "Diamond Statement Necklace",
    shortDescription: "Luxurious diamond statement necklace.", description: "An exquisite diamond necklace set in 18K gold, featuring a cascade of brilliant-cut diamonds.",
    price: 250000, originalPrice: 280000, discount: 10, purity: "750", weight: "24.0g", stone: "Diamond", stoneWeight: "5.00 ct", size: "Standard",
    images: [getImage("1232931"), getImage("1232931"), getImage("1232931")]
  },
  {
    id: "MJ-1006", sku: "SKU-GOLD-106", category: "gold", subcategory: "ring", metal: "22K Gold",
    name: "Men's Gold Band Ring",
    shortDescription: "Solid 22K gold classic band ring.", description: "A sturdy, polished 22K gold band ring designed for everyday wear.",
    price: 35000, originalPrice: 40000, discount: 12, purity: "916", weight: "6.0g", stone: "None", stoneWeight: "N/A", size: "18",
    images: [getImage("2788554"), getImage("2788554"), getImage("2788554")]
  },
  {
    id: "MJ-1007", sku: "SKU-SILVER-107", category: "silver", subcategory: "ring", metal: "925 Silver",
    name: "Sterling Silver Cocktail Ring",
    shortDescription: "Contemporary 925 silver statement ring.", description: "A bold, modern sterling silver ring featuring a unique sculptural design.",
    price: 4500, originalPrice: 5500, discount: 18, purity: "925", weight: "8.5g", stone: "CZ", stoneWeight: "N/A", size: "14",
    images: [getImage("3266700"), getImage("3266700"), getImage("3266700")]
  },
  {
    id: "MJ-1008", sku: "SKU-BRIDAL-108", category: "bridal", subcategory: "necklace", metal: "22K Gold",
    name: "Bridal Pearl & Gold Necklace Set",
    shortDescription: "Grand bridal necklace with pearl drops.", description: "A majestic bridal piece combining 22K gold heritage craftsmanship with lustrous pearl accents.",
    price: 320000, originalPrice: 350000, discount: 8, purity: "916", weight: "45.0g", stone: "Pearls/Kundan", stoneWeight: "N/A", size: "Standard",
    images: [getImage("5466487"), getImage("5466487"), getImage("5466487")]
  },
  {
    id: "MJ-1009", sku: "SKU-GOLD-109", category: "gold", subcategory: "earring", metal: "22K Gold",
    name: "Everyday Gold Stud Earrings",
    shortDescription: "Minimalist 22K gold stud earrings.", description: "Simple, elegant gold studs perfect for daily office wear.",
    price: 15000, originalPrice: 18000, discount: 16, purity: "916", weight: "2.5g", stone: "None", stoneWeight: "N/A", size: "Standard",
    images: [getImage("1191535"), getImage("1191535"), getImage("1191535")]
  },
  {
    id: "MJ-1010", sku: "SKU-SILVER-110", category: "silver", subcategory: "earring", metal: "925 Silver",
    name: "Oxidised Silver Drop Earrings",
    shortDescription: "Boho-chic oxidised silver earrings.", description: "Handcrafted 925 sterling silver drop earrings with an antique oxidised finish.",
    price: 3500, originalPrice: 4200, discount: 16, purity: "925", weight: "5.0g", stone: "None", stoneWeight: "N/A", size: "Standard",
    images: [getImage("1359341"), getImage("1359341"), getImage("1359341")]
  },
  {
    id: "MJ-1011", sku: "SKU-DIAMOND-111", category: "diamond", subcategory: "bracelet", metal: "18K Gold",
    name: "Diamond Tennis Bracelet",
    shortDescription: "Classic inline diamond tennis bracelet.", description: "A continuous circle of brilliant diamonds set in 18K white gold.",
    price: 180000, originalPrice: 210000, discount: 14, purity: "750", weight: "14.0g", stone: "Diamond", stoneWeight: "3.50 ct", size: "Standard",
    images: [getImage("10461876"), getImage("10461876"), getImage("10461876")]
  }
];

// Replicate products to reach 33 items for a full catalog experience while keeping imagery perfectly aligned
const generateProducts = () => {
  let finalProducts = [];
  let idCounter = 1000;
  
  // Clone 3 times to create a robust catalog
  for(let loop = 0; loop < 3; loop++) {
    staticProducts.forEach(prod => {
      idCounter++;
      finalProducts.push({
        ...prod,
        id: `MJ-${idCounter}`,
        sku: `${prod.sku}-${loop}`,
        name: loop > 0 ? `${prod.name} (Variant ${loop + 1})` : prod.name,
        rating: (Math.random() * (5.0 - 4.0) + 4.0).toFixed(1),
        reviewCount: Math.floor(Math.random() * 200) + 10,
        stock: Math.floor(Math.random() * 20) + 1,
        warranty: '6 Months',
        features: ['Handcrafted', 'Authentic Certification', 'Premium Finish'],
        careInstructions: 'Keep away from moisture and perfumes. Store in the provided box.',
      });
    });
  }
  return finalProducts;
};

export const products = generateProducts();

export const reviews = [
  { id: 1, customer: 'Anjali Sharma', rating: 5, text: 'Absolutely love my necklace. The craftsmanship is divine.', date: '2023-10-12', verified: true, avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100' },
  { id: 2, customer: 'Priya Patel', rating: 4, text: 'Beautiful ring, fits perfectly. Delivery was slightly delayed but worth it.', date: '2023-10-10', verified: true, avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100' },
  { id: 3, customer: 'Rohan Desai', rating: 5, text: 'Bought this for my anniversary. My wife was thrilled!', date: '2023-09-28', verified: true, avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100' },
  { id: 4, customer: 'Neha Gupta', rating: 5, text: 'The bridal set was stunning. Looked like a queen on my big day.', date: '2023-09-15', verified: true, avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100' },
  { id: 5, customer: 'Vikram Singh', rating: 4, text: 'Good quality, elegant packaging. Great for gifting.', date: '2023-09-02', verified: true, avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100' }
];

export const adminStats = {
  revenue: 1842650,
  orders: 328,
  customers: 1146,
  products: 156,
  wishlistAdds: 2482
};
