import Link from "next/link";
import React, { useRef, useState } from "react";

const SubMenus = ({ menu }) => {
  const myRef = useRef();
  const [menuStatus, setMenuStatus] = useState([]);
  console.log(menu);
  return (
    <div>
      <ul className=" flex justify-center items-center">
        {menu.map((item, index) => {
          return (
            <CreateMenu
              key={index}
              item={item}
              depth={0}
              menuStatus={menuStatus}
              setMenuStatus={setMenuStatus}
              myRef={myRef}
            ></CreateMenu>
          );
        })}
      </ul>
    </div>
  );
};

const CreateMenu = ({ item, depth, myRef, setMenuStatus, menuStatus }) => {
  const handleMouseEnter = (item, depth) => {
   
    if (item?.submenu) {
    
      console.log(item,depth);
    }
    else{
        console.log("e",item,depth); 
    }
  };
  if (item?.submenu) {
    console.log(menuStatus);
    return (
      <li
        ref={myRef}
        onMouseEnter={(e) => handleMouseEnter(item, depth)}
        className="relative border-2 border-red-800 px-2 py-2 bg-black text-white"
      >
        <Link href={item?.link}>{item?.tit}</Link>
        <ul
          className={` ${
            depth === 0 ? "top-10 left-0" : "left-0 top-0 ml-[calc(100%)]"
          } absolute`}
        >
          {item?.submenu.map((subItem) => {
            return <CreateMenu item={subItem} depth={depth + 1}></CreateMenu>;
          })}
        </ul>
      </li>
    );
  } else {
    return (
      <li onMouseEnter={(e) => handleMouseEnter(item, depth)} className="border-2 border-gray-300 px-2 py-2  bg-black text-white">
        <Link href={item?.link}>{item?.tit}</Link>
      </li>
    );
  }
};

export default SubMenus;
