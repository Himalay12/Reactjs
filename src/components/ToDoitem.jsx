import React from 'react';

const ToDoitem = (props) => {
    
    return (
    <div 
        onClick={() => (
            props.ToDelete(props.id)
        )}>
        <li>{props.item}</li>
    </div>
)};

export default ToDoitem; 