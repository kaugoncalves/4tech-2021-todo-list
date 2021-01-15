import React, { useState } from 'react'
import styled from 'styled-components'

import { TaskCard } from './TaskCard/TaskCard'


export const TaskList = () => {

    const [taskList, setTaskList] = useState([
        {
            status: 'To Do',
            whatToDo: 'Retrieve the Lonely Mountain',
            who: 1,
            priority: 'high'
        },
        {
            status: 'Doing',
            whatToDo: 'Pega',
            who: 2,
            priority: 'low'
        },
        {
            status: 'Done',
            whatToDo: 'tome le',
            who: 3,
            priority: 'average'
        },
    ])

    const TaskListLayout = styled.div`
    grid-column: 2 / 5;
    grid-row: 3;
    `

    const ColumnHeadersArea = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;`

    const ColumnHeader = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    font-size: 30px;`

    const Divider = styled.div`
    border: 0.1rem solid #6D6A6A;
    background-color: #6D6A6A;
    margin-bottom: 2rem;
    `

    const generateTaskColumns = () => {

        const Column = styled.div`
        padding: 0 1%;
        width: calc(100% / 3);
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        `

        const Row = styled.div`
        display: flex;
        `

        return <Row>
         <Column>
         {taskList
            .filter(x => x.status === 'To Do')
            .map(x => {
                return<TaskCard whatToDo={x.whatToDo} who={x.who} priority={x.priority}/>
            })}
        </Column>
        <Column>
        {taskList
            .filter(x => x.status === 'Doing')
            .map(x => {
                return<TaskCard whatToDo={x.whatToDo} who={x.who} priority={x.priority}/>
            })}
        </Column>
        <Column>
        {taskList
            .filter(x => x.status === 'Done')
            .map(x => {
                return<TaskCard whatToDo={x.whatToDo} who={x.who} priority={x.priority}/>
            })}
        </Column>
        </Row>
    }

    return <TaskListLayout>
        <ColumnHeadersArea>
            <ColumnHeader> To Do </ColumnHeader>
            <ColumnHeader> Doing </ColumnHeader>
            <ColumnHeader> Done </ColumnHeader>
        </ColumnHeadersArea>
        <Divider />
        {generateTaskColumns()}
    </TaskListLayout>
}