import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import DeleteIcon from '@material-ui/icons/Delete';

const Todolist = (props) =>{

    const [line, setline] = useState(false);

    const cutIt =() =>{
        setline(true);
    };

    return (
        < >
        <div className="todo-style" >
            <FontAwesomeIcon className="fab-icon"  icon={faMinus}
                onClick={cutIt}
            />
            <li style={{textDecoration:line ? "line-through" :"none"}} >{props.text}</li>
          <DeleteIcon fontSize="large" onClick={()=>{
                props.submit(props.id)
            }} />
        </div>
        
        </>
    )

};

export default Todolist;