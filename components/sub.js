import React from 'react';

const Sub = ({subMenu}) => {
    console.log(subMenu);
    return (
      <div>
       {
        subMenu?.map((sm)=><p>mm</p>)
       }
            
      </div>
  
    );
};

export default Sub;