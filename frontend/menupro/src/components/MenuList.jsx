import React from 'react';
import CategoryCard from './CategoryCard';

const MenuList = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <CategoryCard category="cafe" />
        <CategoryCard category="veggie" />
        <CategoryCard category="breakfast" />
      </div>
    </>
  );
}

export default MenuList;

