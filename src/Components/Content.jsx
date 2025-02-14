import React from 'react';
import gemNecklace from '../assets/gem-necklace.jpg';
import diamondNecklaceEarrings from '../assets/diamond-necklace-earrings.jpg';
import diamondRing from '../assets/diamond-ring.jpg';
import greenEmeraldNecklace from '../assets/green-emarald-necklace.jpg';
import goldbracelet from '../assets/gold-bracelet.jpg';
import uniquechainrings from '../assets/unique-chain-rings';
import uniquebracelets from '../assets/unique-bracelets.jpg';


const contentData = [
  {
    id: 1,
    title: 'Elegant Gem Necklace',
    description: 'A beautiful gemstone necklace perfect for special occasions.',
    image: gemNecklace,
  },
  {
    id: 2,
    title: 'Elegant Diamond Necklace Earrings',
    description: 'A beautiful diamond necklace earrings perfect for special occasions.',
    image: diamondNecklaceEarrings,
  },
  {
    id: 3,
    title: 'Elegant Diamond Ring',
    description: 'A beautiful diamond ring perfect for special occasions.',
    image: diamondRing,
  },
  {
    id: 4,
    title: 'Green Emerald Necklace',
    description: 'A beautiful green emerald necklace perfect for special occasions.',
    image: greenEmeraldNecklace,
  },
  {
    id: 5,
    title: 'Green Emerald Necklace',
    description: 'A beautiful green emerald necklace perfect for special occasions.',
    image: goldbracelet,
  },
  {
    id: 6,
    title: 'Unique Chain Rings',
    description: 'A beautiful green emerald necklace perfect for special occasions.',
    image: uniquechainrings,
  },
  {
    id: 7,
    title: 'Unique Bracelets',
    description: 'A beautiful green emerald necklace perfect for special occasions.',
    image: uniquebracelets,
  },
  
];

const Content = () => {
  return (
    <main className="pt-20"> 
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {contentData.map((item, index) => (
          <div
            key={item.id}
            className={`border rounded-lg overflow-hidden shadow-lg bg-white ${
              index < 4 ? 'mt-10' : ''
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Content;
