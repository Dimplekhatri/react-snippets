import React,{useState} from 'react'

import AddRemove from './components/AddRemove'
import PackingList from './components/PackingList'

const App = () => {
  const [items, setItems] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
    { id: 3, description: "Charger", quantity: 1, packed: false },
  ])

  const addItem = (description,quantity)=>{
    setItems((prevItems)=>[
      ...prevItems,
      {id:prevItems.length+1 ,description, quantity: Number(quantity),packed:false}
      
    ]);
  };

  const removeItem=(id)=>{
    setItems(prevItems=> prevItems.filter((item)=>item.id!==id))
  }
  return (
    <div>
      <AddRemove addItem={addItem} />
      <PackingList items={items} removeItem={removeItem} />
    </div>
  )
}

export default App;


