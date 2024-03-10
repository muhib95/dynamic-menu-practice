// ... (imports and other code)
import Image from 'next/image'
import Link from "next/link";
import { useState } from "react";
import menuNav from "../public/asset/Polygon.png";
const MySub = ({ menu }) => {
  const [myObject, setMyObject] = useState([]);
  const [stage, setStage] = useState(0);

  return (
    <div className="w-60 h-auto">
      <ul className="flex flex-col">
        {menu?.map((item, i) => (
          <Sub
            key={i}
            menu={item}
            setMyObject={setMyObject}
            myObject={myObject}
            setStage={setStage}
            stage={stage}
          />
        ))}
      </ul>
    </div>
  );
};

const Sub = ({
  menu,
  setStage,
  stage,
  myObject,
  setMyObject,
}) => {
  const mouseEnter = (item) => {
    setStage(item.id);
    setMyObject((prev) => [...prev, item.id]);
  };

  const mouseLeave = (item) => {
    setStage(0);
    setMyObject((prev) => prev.filter((id) => id !== item.id));
  };

  if (menu.submenu) {
    return (
      <li
        onMouseEnter={() => mouseEnter(menu)}
        onMouseLeave={() => mouseLeave(menu)}
        className="relative  cursor-pointer bg-[#083344] text-white  hover:bg-white hover:text-black hover:text-black hover:border hover:border-black"
      >
        <div className='flex justify-between items-center'>
          <button className="block px-2 py-3" >
          {menu?.tit}
        </button>
        <Image
                                className="w-[22px] h-[19px] pr-[12px] 2xl:pr-[14px]"
                                priority
                                src={menuNav}
                                alt="Follow us on Twitter"
                              />
        </div>
        
        {myObject.includes(menu.id) && (
          <div className="absolute top-[-1px] left-full  w-60 h-auto">
            <ul>
              {menu?.submenu.map((sub, i) => (
                <Sub key={i} menu={sub} setStage={setStage} stage={stage} myObject={myObject} setMyObject={setMyObject} />
              ))}
            </ul>
          </div>
        )}
      </li>
    );
  } else {
    return (
      <li
        onMouseEnter={() => mouseEnter(menu)}
        onMouseLeave={() => mouseLeave(menu)}
        className="bg-[#083344] text-white  cursor-pointer  hover:bg-white hover:text-black hover:border hover:border-black"
      >
        <Link className=" block px-2 py-3" href={menu?.link}>
          {menu?.tit}
        </Link>
      </li>
    );
  }
};

export default MySub;
