import React from 'react';
import Items from './Items';

const PackingList = ({ items, removeItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <Items item={item} key={item.id} removeItem={removeItem} />
      ))}
    </ul>
  );
};

export default PackingList;
