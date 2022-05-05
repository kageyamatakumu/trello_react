import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


export const TaskCardDeleteButtom = (props) => {
    const { taskCardsList, setTaskCardsList, taskCard} = props;
    const taskCardDeleteButton = (id) => {
        //タスクカードを削除する
        setTaskCardsList(taskCardsList.filter((e) => e.id !== id))
    }
    return (
        <div>
            <button className="taskCardDeleteButton" onClick={() => taskCardDeleteButton(taskCard.id)}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
    )
}
