
import React from "react";
const Todo = (propse) => {
    return (
       <> <p className="itms"> {propse.text}
       <button className="minus" onClick={()=>{
              propse.onSelect(propse.id);
       }}>-</button> </p>
       </>
        );
}

export default Todo
