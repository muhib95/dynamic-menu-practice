import Link from 'next/link';
import React, { useState } from 'react';
import NewMenu from './NewMenu';

const M = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSubSubMenuOpen, setIsSubSubMenuOpen] = useState(false);
console.log(isSubMenuOpen);
console.log(isSubSubMenuOpen);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleSubMenuEnter = () => {
    setIsSubMenuOpen(true);
  };

  const handleSubMenuLeave = () => {
    setIsSubMenuOpen(false);
  };

  const handleSubSubMenuEnter = () => {
    setIsSubSubMenuOpen(true);
  };

  const handleSubSubMenuLeave = () => {
    setIsSubSubMenuOpen(false);
  };

  return (
    <div className='relative'>
      <ul>
        <li>
          <Link href={item.link}>
            <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {item.label}
            </p>
          </Link>
        </li>
      </ul>

      {item.subMenu && isOpen && (
        <div className="border border-black w-32 h-60 absolute left-32 top-[-90px]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Display the submenu array */}
          <ul>
            {item.subMenu.map((subMenuItem, index) => (
              <li key={index}>
                <Link href={subMenuItem.link} onMouseEnter={handleSubMenuEnter} onMouseLeave={handleSubMenuLeave}>
                  <p  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >
                    {subMenuItem.label}
                  </p>
                </Link>
                {subMenuItem.subMenu && isSubMenuOpen && (
                  <div className="border border-black w-32 h-60 absolute left-32 top-[-90px]" onMouseEnter={handleSubSubMenuEnter} onMouseLeave={handleSubSubMenuLeave}>
                    
                    <ul>
                      {subMenuItem.subMenu.map((subSubMenuitem, subIndex) => (
                        <li key={subIndex}>
                          <Link href={subSubMenuitem.link}>
                            <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              {subSubMenuitem.label}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default M;
