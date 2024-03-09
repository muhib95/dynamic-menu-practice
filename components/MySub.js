import Link from "next/link";
import React, { useState } from "react";

const MySub = ({ menu }) => {
  const [myObject, setMyObject] = useState([]);
  const [stage, setStage] = useState("");
  const [hasSub, setHasSub] = useState(false);
  return (
    <div className=" border border-red-600 w-60 h-auto">
      <ul>
        {menu?.map((item,i) => {
          return (
            <Sub
            key={i}
              menu={item}
              setMyObject={setMyObject}
              myObject={myObject}
              setStage={setStage}
              stage={stage}
              setHasSub={setHasSub}
              hasSub={hasSub}
            ></Sub>
          );
        })}
      </ul>
    </div>
  );
};
const Sub = ({ menu,hasSub,setHasSub, depth = 0, myObject, setMyObject, stage, setStage }) => {
 
  const mouseEnter = (item, d) => {
    console.log("mouseEnter",item, d);
  //   setHasSub(false);
  //  if(item?.submenu){
  //   setHasSub(true);
  //   console.log("mouseEnter",item, d,true);
  //  }
    
  };

  const mouseLeave = (item, d) => {
    console.log("mouseLeave",item, d);
    // if(item?.submenu && depth===d){
    //   setHasSub(true);
    //   console.log("mouseEnter",item, d,true);
    //  }
    // setHasSub(false);
    // console.log("mouseLeave",item, d,hasSub);
  };
  if (menu.submenu) {
    return (
      <li
        onMouseEnter={() => mouseEnter(menu, depth)}
        onMouseLeave={() => mouseLeave(menu, depth)}
        className="relative border border-black cursor-pointer"
      >
        <Link className="  block" href={menu?.link}>
          {menu?.tit}
        </Link>
        {/* ${hasSub?"block":"hidden"}  */}
        <div
          className={`absolute left-60 top-0 border-2 border-blue-700 w-60 h-auto `}
        >
          <ul>
            {menu?.submenu.map((sub,i) => (
              <Sub key={i} menu={sub} depth={depth + 1}>
                {sub?.tit}  
              </Sub>
            ))}
          </ul>
        </div>
      </li>
    );
  } else {
    return (
      <li onMouseEnter={() => mouseEnter(menu, depth)}
      onMouseLeave={() => mouseLeave(menu, depth)} className=" border border-black cursor-pointer">
        <Link className=" border border-green-500 block" href={menu?.link}>
          {menu?.tit}
        </Link>
      </li>
    );
  }
};

export default MySub;
