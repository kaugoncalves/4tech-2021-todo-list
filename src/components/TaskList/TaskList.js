import { Spin } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { TaskCard } from './TaskCard/TaskCard'

export const TaskList = ({ loading, taskList, setTaskList }) => {

    const TaskListLayout = styled.div`
    grid-column: 2 / 5;
    grid-row: 3;`

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
    background-color: #606A6A;
    margin-bottom: 2rem;`

    const changeTaskStatus = (taskId, moveTo) => {
        const taskListCopy = [...taskList]
        const taskToBeMoved = taskListCopy.find(x => x.taskId === taskId)

        taskToBeMoved.status = moveTo
        setTaskList(taskListCopy)
    }

    const generateTaskColumns = () => {

        const Column = styled.div`
        padding: 0 1%;
        width: calc(100% / 3);
        display: flex;
        justify-content: flex-start;
        align-itens: center;
        flex-direction: column`

        const Row = styled.div`
        display: flex;`

        return <Row>
            <Column> {
                taskList
                    .filter(x => x.status === 'To Do')
                    .map((x, i) => (<TaskCard key={`To Do ${i}`} taskId={x.taskId} changeTaskStatus={changeTaskStatus} status={x.status} whatToDo={x.whatToDo} who={x.selectedWho} priority={x.priority} />))
            } </Column>
            <Column> {
                taskList
                    .filter(x => x.status === 'Doing')
                    .map((x, i) => (<TaskCard key={`Doing ${i}`} taskId={x.taskId} changeTaskStatus={changeTaskStatus} status={x.status} whatToDo={x.whatToDo} who={x.selectedWho} priority={x.priority} />))
            }</Column>
            <Column> {
                taskList
                    .filter(x => x.status === 'Done')
                    .map((x, i) => (<TaskCard key={`Done ${i}`} taskId={x.taskId} changeTaskStatus={changeTaskStatus} status={x.status} whatToDo={x.whatToDo} who={x.selectedWho} priority={x.priority} />))
            } </Column>
        </Row>
    }

    return <TaskListLayout>
        <ColumnHeadersArea>
            <ColumnHeader> To Do </ColumnHeader>
            <ColumnHeader> Doing </ColumnHeader>
            <ColumnHeader> Done </ColumnHeader>
        </ColumnHeadersArea>
        <Divider />
        <Spin spinning={loading}>
            {generateTaskColumns()}
        </Spin>
    </TaskListLayout>
}