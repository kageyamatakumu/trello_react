import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { TaskCardDeleteButtom } from './button/TaskCardDeleteButtom'
import { TaskAddInput } from './input/TaskAddInput'
import { TaskCardTitle } from './TaskCardTitle'
import { Tasks } from './Tasks'

export const TaskCard = (props) => {
    const { taskCardsList, setTaskCardsList, taskCard, index} = props;
    const [inputText, setInputText] = useState("");
    const [taskList, setTaskList] = useState([]);
    return (
        <Draggable draggableId={taskCard.id} index={index}>
            {(provided) => (
            <div className="taskCard" ref={provided.innerRef} {...provided.draggableProps} >
                <div className="taskCardTitleAndTaskCardDeleteButton" {...provided.dragHandleProps}>
                    <TaskCardTitle />
                    <TaskCardDeleteButtom taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} taskCard={taskCard} />
                </div>
                <TaskAddInput
                    inputText={inputText}
                    setInputText={setInputText}
                    taskList={taskList}
                    setTaskList={setTaskList}
                />
                <Tasks
                    inputText={inputText}
                    taskList={taskList}
                    setTaskList={setTaskList}
                />
            </div>
            )}

        </Draggable>
    )
}
