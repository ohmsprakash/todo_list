import React,{useState} from 'react';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState("");
  const [arr, setArr] = useState([]);
  const [isChecked, setIsChecked] = useState([]);

function handleCheckboxchange(event, todoListValue){
  console.log(`targetValue`, event.target.value);
  console.log(`todoListValue`, todoListValue);

  if(isChecked.includes(todoListValue)){
    const newArray = isChecked.filter((value,i) => { 
      console.log(
       `Iteration ${i}: value: ${value}, todoListValue: ${todoListValue}`
      );
      return value !== todoListValue;
    });
    setIsChecked(newArray);
    console.log('isChecked Array getting updated in if block', newArray);
  } else {
    console.log('isChecked Array getting updated in else block', [...isChecked, todoListValue]);
    setIsChecked([...isChecked, todoListValue]);
  }
}
  return (
    <div className='card'>
      <h3>Todo List</h3>
      <input type="text" 
             onChange={ (e) => { 
              console.log(e.target.value);
              setUserInput(e.target.value); 
              }}/>
      <button onClick = {() => { 
        setArr([...arr,userInput]);
        }}>
          Add Item</button>
      <ul className="listItems">
        {
          arr.map( (item, i) => {
            return(
        <li key={i}>
          <div>
          <input id={item} 
                 name='todo-list'
                 className="customCheckbox"
                 type="checkbox"
                 value={item}
                 onChange={(e)=> {
                  handleCheckboxchange(e, item)}}/>
          </div>
          <label htmlFor={item}>
            { isChecked.includes(item) ? <del>{item}</del> : item }
          </label>
          <button
            onClick={() => {
              setArr(arr.filter((e) => e !== item));
            }}>Delete</button>
        </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App;
