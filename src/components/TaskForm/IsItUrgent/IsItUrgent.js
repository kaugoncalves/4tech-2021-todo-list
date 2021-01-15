import React, { useState } from 'react'
import styled from 'styled-components'

export const IsItUrgent = ({ initialUrgency, onChangePriority }) => {

    const defaultlUrgencyScale = [{
        urgency: 'low',
        color: '#71A1FF',
        selected: false,
    },
    {
        urgency: 'average',
        color: '#F8BD26',
        selected: false,
    },
    {
        urgency: 'high',
        color: '#FF7171',
        selected: false,
    }]

    const initialUrgencyScale = defaultlUrgencyScale.map(x => {
        if (x.urgency === initialUrgency.urgency) {
            return { ...x, selected: true }
        }

        return x
    })

    const [urgencyScale, setUrgencyScale] = useState(initialUrgencyScale)


    const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    padding-left: 1rem`

    const IsItUrgentLabel = styled.div`
    font-size: 30px;
    `

    const IsItUrgentSelectionArea = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5rem;
    background: #FFFFFF;
    box-shadow: 5px 5px 10px #A9C4DA;
    border-radius: 5px;`

    const onClickToSetUrgency = (urgency) => {
        const urgencyScaleWithNewSelection = urgencyScale.map(x => {

            if (x.urgency === urgency) {
                return { ...x, selected: true }
            }

            return { ...x, selected: false }
        })

        setUrgencyScale(urgencyScaleWithNewSelection)
        onChangePriority(urgencyScaleWithNewSelection.find(x => x.selected === true))
    }

    const generateUrgencyOptions = () => {
        return urgencyScale.map((x, i) => {

            if (x.selected) {
                return <div key={i} style={{
                    backgroundColor: x.color,
                    width: 'calc(2.5rem + 5px)',
                    height: 'calc(2.5rem + 5px)',
                    border: '5px solid #5BF326',
                    borderRadius: '3px',
                    cursor: 'pointer'
                }} />
            }

            return <div key={i} style={{
                backgroundColor: x.color,
                width: '2.5rem',
                height: '2.5rem',
                cursor: 'pointer'
            }} onClick={() => onClickToSetUrgency(x.urgency)} />
        })
    }

    return <FormItem>
        <IsItUrgentLabel> Is It Urgent? </IsItUrgentLabel>
        <IsItUrgentSelectionArea>
            {generateUrgencyOptions()}
        </IsItUrgentSelectionArea>
    </FormItem>
}