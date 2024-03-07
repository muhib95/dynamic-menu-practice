import React, { useEffect, useState } from 'react';

const index = () => {
    const [menuData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("menuData.json");
        const data = await response.json();
        setJsonData(data?.menuItems);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(menuData);
    return (
        <div>
            <button>
                Click
            </button>
            <div className='flex'>
               <div className='border border-black w-36 h-40'>
                <ul>
                    {
                        menuData?.map((mL)=><li>
{mL?.label}
                        </li>)

                    }
                </ul>

            </div>
            <div className='border border-black w-36 h-40'>

            </div>
            <div className='border border-black w-36 h-40'>

            </div> 
            </div>
            
        </div>
    );
};

export default index;