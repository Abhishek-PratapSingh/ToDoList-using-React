
import React , {useState} from "react";
import Todo from "./components/Todo";

function App() {

const [inputList , setInputList]=useState();
const[addItem , setItem] = useState([]);

  function func1(event){
     setInputList(event.target.value);
  }
  
  const func2= ()=>{
    
      setItem((oldItems)=>{
         return [...oldItems,inputList];
      });
      setInputList("");
      
  };

   const deleteitems = (id)=>{
     console.log("deleted");
   setItem((oldItems)=>{
    return oldItems.filter((arrelement,index)=>{
      return index!==id;
   });
  });
  };
  return (
    <div className="box">
     <div className="main">
     <h1 >To-Do List</h1> 
     <hr />
     <div className="inp">
     <input type="text" placeholder="Add a todo list" value={inputList} onChange={func1} />
     <button className="plus" onClick={func2}>+</button>
     </div>
     
     {addItem.map((itemvalue,index)=>{
     return <Todo key ={index} id={index} text={itemvalue} onSelect={deleteitems} />;
     })
    }
    </div>
    </div>
  );
}

export default App;
