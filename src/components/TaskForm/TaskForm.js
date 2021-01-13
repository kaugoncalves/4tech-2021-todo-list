import React, { useState } from 'react'
import styled from 'styled-components'

import {WhatToDo} from './WathToDo/WhatToDo'
import {Who} from './Who/Who';
import {ItIsUrgent} from './IsItUrgent/ItIsUrgent';



export const TaskForm = () =>{
    const TaskFormLayout = styled.div`
    grid-column: 2/5;
    grid-row: 2;   
    display: flex;
    user-select: none;
    `

    return <TaskFormLayout>
            <WhatToDo></WhatToDo>
            <Who />
            <ItIsUrgent />
    </TaskFormLayout>

}