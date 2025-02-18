import React, { useEffect, useState } from 'react';
import ContentDropdown from './ContentDropdown';
import gemNecklace from '../assets/gem-necklace.jpg';
import diamondNecklaceEarrings from '../assets/diamond-necklace-earrings.jpg';
import diamondRing from '../assets/diamond-ring.jpg';
import greenEmeraldNecklace from '../assets/green-emarald-necklace.jpg';
import goldbracelet from '../assets/gold-bracelet.jpg';
import uniquechainrings from '../assets/unique-chain-rings.jpg';
import silvernecklaceearrings from '../assets/silver-necklace-earrings.jpg';
import comboearrings from '../assets/combo-earrings.jpg';


const contentData = [
  {
    id: 1,
    title: 'Elegant Gem Necklace',
    description: 'A beautiful gemstone necklace perfect for special occasions.',
    image: gemNecklace,
    price: '1000',
    offer: '500',
  },
  {
    id: 2,
    title: 'Elegant Diamond Necklace Earrings',
    description:
      'A beautiful diamond necklace earrings perfect for special occasions.',
    image: diamondNecklaceEarrings,
    price: '1000',
    offer: '500',
  },
  {
    id: 3,
    title: 'Elegant Diamond Ring',
    description: 'A beautiful diamond ring perfect for special occasions.',
    image: diamondRing,
    price: '1000',
    offer: '500',
  },
  {
    id: 4,
    title: 'Green Emerald Necklace',
    description:
      'A beautiful green emerald necklace perfect for special occasions.',
    image: greenEmeraldNecklace,
    price: '1000',
    offer: '500',
  },
  {
    id: 5,
    title: 'Gold Bracelet',
    description:
      'A beautiful green emerald necklace perfect for special occasions.',
    image: goldbracelet,
    price: '1000',
    offer: '500',
  },
  {
    id: 6,
    title: 'Unique Chain Rings',
    description:
      'A beautiful green emerald necklace perfect for special occasions.',
    image: uniquechainrings,
    price: '1000',
    offer: '500',
  },
  {
    id: 7,
    title: 'Silver Necklace Earrings',
    description:
      'A beautiful green emerald necklace perfect for special occasions.',
    image: silvernecklaceearrings,
    price: '1000',
    offer: '500',
  },
  {
    id: 8,
    title: 'Combo Earrings',
    description:
      'A beautiful green emerald necklace perfect for special occasions.',
    image: comboearrings,
    price: '1000',
    offer: '500',
  },
];

const Content = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.29.85:5000/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main className="pt-20">
      <div className="flex justify-between items-center my-20 px-5 md:px-20 mb-6">
      <h1 className="text-3xl font-serif font-semibold text-center mx-auto">New Launch</h1>
      <div><ContentDropdown /></div>
      </div>
      
  
      <div className="container p-5 mx-auto px-5 sm:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item, index) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <img
              src={`http://192.168.29.85:5000${item.image}`}
              alt={item.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
              <div className="flex gap-5 text-center justify-center">
                <p className="text-gray-700 italic font-semibold">
                  <del>₹{item.price}</del>
                </p>
                <p className="text-gray-700">₹{item.discount_price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Content;
