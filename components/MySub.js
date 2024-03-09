// ... (imports and other code)

import Link from "next/link";
import { useState } from "react";

const MySub = ({ menu }) => {
  const [myObject, setMyObject] = useState([]);
  const [stage, setStage] = useState(0);
  const [hasSub, setHasSub] = useState(false);

  return (
    <div className="border border-red-600 w-60 h-auto">
      <ul>
        {menu?.map((item, i) => (
          <Sub
            key={i}
            menu={item}
            setMyObject={setMyObject}
            myObject={myObject}
            setStage={setStage}
            stage={stage}
            setHasSub={setHasSub}
            hasSub={hasSub}
          />
        ))}
      </ul>
    </div>
  );
};

const Sub = ({
  menu,
  hasSub,
  setHasSub,
  depth = 0,
  
  myObject,
  setMyObject,
  stage,
  setStage,
}) => {
console.log(stage);
  const mouseEnter = (item, d) => {
    setStage(d);
    if (item.submenu && item.submenu.length > 0&&depth === d) {
      setHasSub(true);
    }
    if(d==stage){
      setHasSub(true);
    }
   
    console.log("mouseEnter", item, d);
  };

  const mouseLeave = (item, d) => {
    setStage(d-1)
    // Check if moving to a submenu within the same hierarchy
    if (depth === d ) {
      setHasSub(false);
    }
    console.log("mouseLeave", item, d);
  };

  if (menu.submenu) {
    return (
      <li
        onMouseEnter={() => mouseEnter(menu, depth)}
        onMouseLeave={() => mouseLeave(menu, depth)}
        className="relative border border-black cursor-pointer"
      >
        <Link className="block" href={menu?.link}>
          {menu?.tit}
        </Link>
        {hasSub && stage>=depth &&(
          <div
            className={`absolute left-[298px] top-0 border-2 border-blue-700 w-60 h-auto`}
          >
            <ul>
              {menu?.submenu.map((sub, i) => (
                <Sub key={i} menu={sub} depth={depth + 1} hasSub={hasSub} setHasSub={setHasSub} stage={stage} setStage={setStage}/>
              ))}
            </ul>
          </div>
        )}
      </li>
    );
  } else {
    return (
      <li
        onMouseEnter={() => mouseEnter(menu, depth)}
        onMouseLeave={() => mouseLeave(menu, depth)}
        className="border border-black cursor-pointer"
      >
        <Link className="border border-green-500 block" href={menu?.link}>
          {menu?.tit}
        </Link>
      </li>
    );
  }
};

export default MySub;
