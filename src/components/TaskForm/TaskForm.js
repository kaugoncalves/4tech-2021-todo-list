import React, { useState } from 'react'
import styled from 'styled-components'
import uniqid from 'uniqid'

import { IsItUrgent } from './IsItUrgent/IsItUrgent'
import { WhatToDo } from './WhatToDo/WhatToDo'
import { Who } from './Who/Who'
import { Save } from './Save/Save'

export const TaskForm = ({ loading, submitNewTask }) => {

    const formValues = {
        taskId: uniqid(),
        status: 'To Do',
        whatToDo: 'So, what are you up to?',
        selectedWho: 1,
        priority: {
            urgency: 'low',
            color: '#71A1FF',
            selected: true,
        },
        createdAt: ''
    }


    const onChangeWhatToDo = (whatToDo) => {
        formValues.whatToDo = whatToDo
    }

    const onChangeSelectedWho = (selectedWho) => {
        formValues.selectedWho = selectedWho
    }

    const onChangePriority = (urgency) => {
        formValues.priority = urgency
    }

    const saveTask = () => {
        formValues.createdAt = (new Date()).getTime()
        console.log(formValues);
        submitNewTask(formValues);
    }

    const TaskFormLayout = styled.div`
    grid-column: 2 / 5;
    grid-row: 2;
    display: flex;
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    `

    return <TaskFormLayout>
        <WhatToDo initialWhatToDo={formValues.whatToDo} onChangeWhatToDo={onChangeWhatToDo} />
        <Who initialSelectedWho={formValues.selectedWho} onChangeSelectedWho={onChangeSelectedWho} />
        <IsItUrgent initialUrgency={formValues.priority} onChangePriority={onChangePriority} />
        <Save loading={loading} saveTask={saveTask} />
    </TaskFormLayout>
}