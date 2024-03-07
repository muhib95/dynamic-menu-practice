import React, { useEffect, useState } from 'react';

const DropdownMenu = () => {
    const [categories, setcategories] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("catagories.json");
          const data = await response.json();
          setcategories(data?.categories);
        console.log(data);
        } catch (error) {
          console.error('Error fetching JSON data:', error);
        }
      };
  
      fetchData();
    }, []);
    console.log(categories);
    const renderSubcategories = (subcategories) => {
        if (!subcategories) return null;
    
        return (
          <ul className="ml-4">
            {subcategories.map((subcategory) => (
              <li key={subcategory.id}>
                {subcategory.name}
                {renderSubcategories(subcategory.subcategories)}
              </li>
            ))}
          </ul>
        );
      };
    
      return (
        <div className="relative inline-block text-left">
          <div>
            <span className="rounded-md shadow-sm">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-200 transition duration-150 ease-in-out"
              >
                Categories
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.293 7.293a1 1 0 011.414 1.414L10 13.414l-4.293-4.293a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </span>
          </div>
    
          <div className="absolute z-50 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-lg">
            <div className="py-1">
              <ul>
                {categories.map((category) => (
                  <li key={category.id}>
                    <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      {category.name}
                    </span>
                    {renderSubcategories(category.subcategories)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
};

export default DropdownMenu;
