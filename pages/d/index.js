import MySub from "@/components/MySub";
import SubMenus from "@/components/SubMenus";
import React, { useRef, useState } from "react";

const index = () => {
  const menu = [
    {
      tit: "TechMaalashi",
      id: 1,
      link: "/home",
      submenu: [
        {
          tit: "Nextjs",
          id: 2,
          link: "nj",
        },
        {
          tit: "JS",
          id: 3,
          link: "js",
          submenu: [
            {
              tit: "subSub",
              id: 4,
              link: "subsub",
              submenu: [
                {
                  tit: "subSub",
                  id: 4,
                  link: "subsub",
                }
              ],
            }
          ],
        },
        {
          tit: "PG",
          id: 5,
          link: "pg",
        },
      ],
    },
    {
      tit: "Muhib",
      id: 6,
      link: "/home",
      submenu: [
        {
          tit: "mjs",
          id: 7,
          link: "#",
          submenu: [
            {
              tit: "subSubMuhib",
              id: 20,
              link: "subSubMuhib",
            }
          ],
        },
        {
          tit: "JS",
          id: 8,
          link: "#",
        },
        {
          tit: "PG",
          id: 9,
          link: "#",
        },
      ],
    },
    {
      tit: "Ak",
      id: 10,
      link: "/home",
     
    },
  ];
  const [open,setOpen]=useState(false);
  const menuOpener=()=>{
    setOpen(!open);
  }
 
  return <div>
  <SubMenus menu={menu} ></SubMenus>
  <div>
    <div className="py-3">
      <button className="bg-blue-600 text-white px-2 py-1" onClick={()=>menuOpener()}>Menu</button>
    </div>
    {
      open&&<MySub menu={menu}></MySub>
    }
     
  </div>
 
  </div>;
};

export default index;
