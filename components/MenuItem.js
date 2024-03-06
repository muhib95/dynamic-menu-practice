import { useState } from "react";

const MenuItem = ({ item }) => {
  const [openClose, setOpenClose] = useState(false);

  return (
    <div
      className=""
      onMouseEnter={() => setOpenClose(true)}
      onMouseLeave={() => setOpenClose(false)}
    >
      <a
        href={item.link}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        {item.label}
      </a>
      {item.subMenu && openClose && (
        <div
          className="absolute top-0 left-52 w-40 h-52  border border-black"
          onMouseEnter={() => setOpenClose(true)} // Keep submenu open on submenu enter
          //onMouseLeave={() => setOpenClose(false)}
        >
          <div className="pl-4">
            {item.subMenu.map((subItem, index) => (
              <MenuItem key={index} item={subItem} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
