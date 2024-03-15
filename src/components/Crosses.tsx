import React from "react";

type TasksType = {
    id: number
    title: string
    isDone: boolean
}

type CrossesPropsType = {
    tasks: Array<TasksType>
    children: React.ReactNode
}

export const Crosses = ({tasks, children}: CrossesPropsType) => {
    return (
        <div>
            <ul>
                {tasks.map(task => {
                    return (
                        <li key={task.id}>
                            <span>{task.title}</span>
                            <input type={"checkbox"} checked={task.isDone}></input>
                        </li>
                    )
                })}
                {children}
                <hr/>
            </ul>
        </div>
    )
}