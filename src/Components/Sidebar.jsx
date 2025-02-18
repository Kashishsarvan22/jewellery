import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({ price: true, category: true, color: false, material: false });
  const [filters, setFilters] = useState({
    priceRange: [0, 5999],
    categories: [],
    colors: [],
    materials: [],
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value],
    }));
  };

  const filtersData = {
    categories: [
      { name: "Body Chains", count: 4 },
      { name: "Bracelets", count: 244 },
      { name: "Charms & Pendants", count: 13 },
      { name: "Earrings", count: 324 },
      { name: "Gift Box", count: 34 },
      { name: "Jewelry Sets", count: 62 },
      { name: "Keychains", count: 1 },
      { name: "Necklaces", count: 370 },
      { name: "Rings", count: 374 },
      { name: "Set of Earrings", count: 25 },
      { name: "Set of Rings", count: 12 },
    ],
    colors: [
      { name: "Baby Pink", count: 1 },
      { name: "Beige", count: 2 },
      { name: "Black", count: 90 },
      { name: "Blue", count: 83 },
      { name: "Brown", count: 10 },
      { name: "Dark Blue", count: 1 },
      { name: "Dark Pink", count: 1 },
    ],
    materials: [
      { name: "14K Gold", count: 50 },
      { name: "18K Gold", count: 35 },
      { name: "Acrylic", count: 20 },
      { name: "Alloy", count: 95 },
      { name: "Brass", count: 60 },
      { name: "Stainless Steel", count: 130 },
    ],
  };

  return (
    <div className="fixed top-0 left-0 h-full w-64 p-4 my-40 border-r text-black text-sm bg-white overflow-auto">
      <FilterSection title="PRICE" isOpen={openSections.price} toggle={() => toggleSection("price")}>
        <div className="flex justify-between text-gray-700 text-xs">
          <span>Rs. {filters.priceRange[0].toFixed(2)}</span>
          <span>Rs. {filters.priceRange[1].toFixed(2)}</span>
        </div>
        <Slider
          range
          min={0}
          max={5999}
          step={10}
          value={filters.priceRange}
          onChange={(value) => setFilters({ ...filters, priceRange: value })}
        />
      </FilterSection>

      <FilterSection title="PRODUCT CATEGORY" isOpen={openSections.category} toggle={() => toggleSection("category")}>
        <FilterList
          items={filtersData.categories}
          selectedItems={filters.categories}
          type="categories"
          handleFilterChange={handleFilterChange}
        />
      </FilterSection>

      <FilterSection title="COLOUR" isOpen={openSections.color} toggle={() => toggleSection("color")}>
        <FilterList
          items={filtersData.colors}
          selectedItems={filters.colors}
          type="colors"
          handleFilterChange={handleFilterChange}
        />
      </FilterSection>

      <FilterSection title="MATERIAL" isOpen={openSections.material} toggle={() => toggleSection("material")}>
        <FilterList
          items={filtersData.materials}
          selectedItems={filters.materials}
          type="materials"
          handleFilterChange={handleFilterChange}
        />
      </FilterSection>
    </div>
  );
};

const FilterSection = ({ title, isOpen, toggle, children }) => (
  <div className="mb-4">
    <button onClick={toggle} className="flex justify-between items-center w-full text-sm font-semibold pb-2 border-b">
      {title} {isOpen ? <FaChevronUp /> : <FaChevronDown />}
    </button>
    {isOpen && <div className="mt-2">{children}</div>}
  </div>
);

const FilterList = ({ items, selectedItems, type, handleFilterChange }) => (
  <div className="flex flex-col items-start space-y-2">
    {items.map((item) => (
      <div key={item.name} className="flex items-center space-x-2 w-full">
        <input
          type="checkbox"
          className="w-4 h-4"
          checked={selectedItems.includes(item.name)}
          onChange={() => handleFilterChange(type, item.name)}
        />
        <label className="text-gray-800 w-full text-left">{item.name} ({item.count})</label>
      </div>
    ))}
  </div>
);

export default Sidebar;
