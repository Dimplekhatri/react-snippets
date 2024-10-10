import React from 'react'

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 12, packed: false },
]

const PackingList=({initialItems})=>{
  return(
    <ul>
      {initialItems.map((item) => (
        <Items item={item} key={item.id}/>
      ))
      }
    </ul>
  )
}
const Items=({item})=>{
  return(
    <li>
      {item.quantity} {item.description}
    </li>
  )

}
const App = () => {
  return (
    <div>
      <PackingList initialItems={initialItems}/>
    </div>
  )
}

export default App
