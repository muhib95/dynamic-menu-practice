import MenuItem from "./MenuItem";

const DropdownMenu = ({ menuData }) => {
    console.log(menuData);
    return (
      <div className="relative inline-block text-left">
        <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
          Menu
        </button>
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {menuData?.menuItems?.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default DropdownMenu;