import React from 'react'
import { v4 as uuid } from 'uuid';

export const AddTaskCardButton = (props) => {
    const {taskCardsList, setTaskCardsList} = props;

    const AddTaskCard = () => {
        const taskCardId = uuid();
        setTaskCardsList([...taskCardsList, {
            id: taskCardId,
            draggableId: `item${taskCardId}`,
        }])
    }
    return (
        <div className="addTaslCardButtonArea">
            <button className="addTaskCardButton" onClick={AddTaskCard}>+</button>
        </div>
    )
}
