import React,{useState} from 'react'

const AddRemove = ({addItem}) => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (description && quantity) {
      addItem(description, quantity);
      setDescription('');
      setQuantity(1);
    }
  }
  
  return (
    <form>
      <h3>What all do you require? Select below:</h3>
      <select value={quantity} onChange={(e)=> setQuantity(e.target.value)}>
        <option value="">Select quantity</option> 
        {Array.from({ length: 20 }, (_, index) => {
          const number = index + 1; 
          return (
            <option value={number} key={number}>
              {number}
            </option>
          );
        })}
      </select>
      <input type="text" placeholder="add item" value={description} onChange={(e)=> setDescription(e.target.value)}/>
      <input type="submit" value="Add" onClick={handleSubmit}/>
    </form>
  );
}
  

export default AddRemove;
