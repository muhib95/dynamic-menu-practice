
import DropdownMenu from "@/components/DropdownMenu";
import M from "@/components/m";
import { useEffect, useState } from "react";

const App = () => {
  // const response = fetch("menuData.json");
  // const movies =  response.json();
  // console.log(movies);
  const [menuData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("menuData.json");
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(menuData);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
    <DropdownMenu menuData={menuData} />

    
  </div> 
  <div>
    <div className="">
      <div className="border border-black w-32 h-60">
        
        {menuData?.menuItems?.map((item, index) => (
             <M item={item}></M>
            ))}
         
        

      </div>
      {/* {isOpen?
      <div className="border border-black w-32 h-60">

      </div>
      :
      null

      } */}
      
    </div>
      
    </div>
    </div>
   
  );
};

export default App;