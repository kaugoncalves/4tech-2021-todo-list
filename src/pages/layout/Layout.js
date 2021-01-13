import React from 'react'
import styled from 'styled-components'

import {TaskForm} from '../../components/TaskForm/TaskForm'


export const Layout = () => {
    const Structure = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 8em 1fr 1fr 1fr 8em;
    grid-template-rows: 1rem 9em 1fr;
    background-image: linear-gradient(to bottom right, #E7F0FD, #ACEEBB);
    `

    const TodoColumns = styled.div`
    grid-column: 2/5;
    grid-row: 3;
    background-color: royalblue;
    `
    return <Structure> 
        <TaskForm />    
        <TodoColumns />
    </Structure>
}