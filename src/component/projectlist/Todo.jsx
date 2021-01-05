import React, { useState } from 'react';
import Todolist from './Todolist';
import '../css/Todo.css';
import { useHistory } from 'react-router-dom';

const Todo =() =>{
    const history = useHistory();

    const [inputList, setList] = useState("");
    const [Items , setItems]= useState([]);
    const itemEvent = (event) =>{
        setList(event.target.value);

    };

    const addItem= () =>{
        setItems((oldItems)=>{
            return[...oldItems, inputList]
        });
        setList("");

    };

    const deleteitems = (id) =>{
        console.log('deleted');
        setItems((oldItems)=>{
            return oldItems.filter((arritem, index)=>{
                return index!==id;
            })
        });
  };


    return(
        <>
            <div className="todocontainer">
                <div className="backbutton">
                    <button onClick={() =>{
                        history.push('/projects')
                    }} >Back</button>
                </div>
                <div className="card card-outer" style={{width: "18rem"}}>
                    <div className=".main_div" >
                        <div className=".center_div">
                            <h1 className="todoheading">TO-DO LIST</h1>
                            <input className="todoinput" value={inputList} type="text" placeholder="Add a item" onChange={itemEvent} />
                            <button className="todobutton" onClick={addItem}>+</button>
                            <div className="card-body">
                                <ol>
                                    {Items.map( (itemval, index) =>{
                                        return <Todolist text={itemval} 
                                            key={index}
                                            id={index}
                                            submit={deleteitems}
                                        />
                                    })}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </>
        

    );
};

export default Todo;