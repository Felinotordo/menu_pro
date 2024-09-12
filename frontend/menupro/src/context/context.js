import React, { createContext, useState } from 'react';

// Crear el contexto
const ItemsContext = createContext();


const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };
  const deleteItem =(item)=>{
    setItems(items.filter((i)=>i.name !== item.name));
  }

  return (
    <ItemsContext.Provider value={{ items, addItem, deleteItem }}>
      {children}
    </ItemsContext.Provider>
  );
};

export { ItemsContext, ItemsProvider };
