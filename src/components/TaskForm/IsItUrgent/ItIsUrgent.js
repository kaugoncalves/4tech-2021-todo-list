import  React, { useState } from 'react'
import styled from 'styled-components'
import uniqid from 'uniqid'

export const ItIsUrgent = () => {


    const [urgencyScale, setUrgencyScale] = useState([
        {
            urgency: 'low',
            color: '#71A1FF',
            selected: true,
        },
        {
            urgency: 'average',
            color: '#F8BD26',
            selected : false
        },
        {
            urgency: 'high',
            color: '#FF7171',
            selected: false
        }

    ])

    const ForItem = styled.div`
    display: flex;
    flex-direction: column;
    width:25%;
    padding-left: 1rem;
    `

    const ItIsUrgentUrgentLabel = styled.div`
    font-size: 30px;
    `

    const ItIsUrgentUrgentSelectionArea = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    height: 5rem;
    background: #FFFFFF;
    box-shadow: 5px 5px  10px #A9C4DA;
    border-radius: 5px;

    `


    const onClickToSetUrgency = (urgency) => {
        const urgencyScaleWithNewSelection = urgencyScale.map(x => {

            if(x.urgency === urgency){
                return{ ...x, selected: true}
            }

            return {...x, selected: false}
        })

        setUrgencyScale(urgencyScaleWithNewSelection)
    }
    const generateUrgencyOptions = () => {

        return urgencyScale.map(urgency => {
            if(urgency.selected){
                return <div key={uniqid()}
                    style={{
                        backgroundColor: urgency.color,
                        width: 'calc(2.5rem + 5px)',
                        height: 'calc(2.5rem + 5px)',
                        border: '5px solid #5BF326',
                        borderRadius: '3px',
                        cursor: 'pointer',

                    }}
                />
            }
            return <div key={uniqid()} style={{
                backgroundColor: urgency.color,
                width: '2.5rem',
                height: '2.5rem',
                cursor: 'pointer',
            }} onClick={() => onClickToSetUrgency(urgency.urgency)} />
        })
    }

    return <ForItem>
    <ItIsUrgentUrgentLabel>Is it urgent? </ItIsUrgentUrgentLabel>
    <ItIsUrgentUrgentSelectionArea> { generateUrgencyOptions() } </ItIsUrgentUrgentSelectionArea>
    </ForItem>
}