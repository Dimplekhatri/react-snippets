import React from 'react';

const Items = ({ item, removeItem }) => {
  return (
    <li>
      {item.quantity} {item.description}
      <button onClick={() => removeItem(item.id)}>❌</button>
    </li>
  );
};

export default Items;
