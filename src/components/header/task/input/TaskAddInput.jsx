import React from 'react';
import { v4 as uuid } from 'uuid';

export const TaskAddInput = (props) => {
    const {inputText, setInputText, taskList, setTaskList} = props;


    const handleSubmit = (e) => {
        const taskId = uuid();
        e.preventDefault();
        //カードを追加
        if(inputText === ""){
            return;
        }
        setTaskList([
            ...taskList,
            {
                id: taskId,
                text: inputText,
                draggableId: `task-${taskId}`
            },
        ]);
        setInputText('');
    };

    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="taskAddInput" type="text" placeholder="add a task" value={inputText} onChange={handleChange}/>
            </form>
        </div>
    )
}


