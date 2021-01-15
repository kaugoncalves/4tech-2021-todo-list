import { Spin } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import uniqid from 'uniqid'

import { TaskForm } from '../../components/TaskForm/TaskForm'
import { TaskList } from '../../components/TaskList/TaskList'

export const Layout = () => {

    const [taskList, setTaskList] = useState([])
    const [loading, setLoading] = useState(false)

    const submitNewTask = (newTask) => {
        const taskListCopy = [...taskList]
        taskListCopy.push(newTask)

        const reorderedTaskListCopy = taskListCopy.sort((x, y) => x.createdAt - y.createdAt)

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            setTaskList(reorderedTaskListCopy)
        }, 3000)
    }

    const Structure = styled.div`
        overflow-y: auto;
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: 8em 1fr 1fr 1fr 8em;
        grid-template-rows: 1rem 9rem 1fr;
        background-image: linear-gradient(to bottom right, #E7F0FD, #ACEEBB);
    `

    return <Structure>
        <TaskForm loading={loading} submitNewTask={submitNewTask} />
        <TaskList loading={loading} taskList={taskList} setTaskList={setTaskList} />
    </Structure>

}