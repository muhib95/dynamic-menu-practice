// ... (imports and other code)

import Link from "next/link";
import { useState } from "react";

const MySub = ({ menu }) => {
  const [myObject, setMyObject] = useState([]);
  const [stage, setStage] = useState(0);

  return (
    <div className=" w-60 h-auto">
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
        className="relative  cursor-pointer bg-blue-700 text-white border-t border-black"
      >
        <Link className="block px-2 py-3" href={menu?.link}>
          {menu?.tit}
        </Link>
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
        className="bg-blue-700 text-white border-t border-black cursor-pointer"
      >
        <Link className=" block px-2 py-3" href={menu?.link}>
          {menu?.tit}
        </Link>
      </li>
    );
  }
};

export default MySub;
