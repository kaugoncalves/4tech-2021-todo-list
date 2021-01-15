import React from 'react'
import styled from 'styled-components'

import { Card, Avatar } from 'antd'

import Avatar1 from '../../../assets/avatar1.png'
import Avatar2 from '../../../assets/avatar2.png'
import Avatar3 from '../../../assets/avatar3.png'
import Avatar4 from '../../../assets/avatar4.png'

export const TaskCard = ({ whatToDo, who, priority }) => {
    

    const Footer = styled.div`
    display: flex;
    justify-content: space-between;`

    const getPriorityAndSetIntoTitle = () => {
        const urgencyColorPallete = [
            {urgency: 'low', color: '#71A1FF'},
            {urgency: 'average', color: '#F88D26'},
            {urgency: 'high', color: '#FF7171'}
        ]

        const CardTitle = styled.span`
        display:flex;
        align-items: center;
        `
    
        const ColorBlock = styled.span`
        display: inline-block;
        height: 1rem;
        width: 1rem;
        background-color: ${urgencyColorPallete.find(x => x.urgency === priority).color};
        margin-left: 1rem;
        `

        return <CardTitle> Priority <ColorBlock /> </CardTitle>
    }

    const getCardButtons = () => {
        return <span> Buttons </span>
    }

    const generateWhoOnFooter = () => {

        const AvalibleAvatars = [
            {avatarIndex: 1, avatarSource: Avatar1},
            {avatarIndex: 2, avatarSource: Avatar2},
            {avatarIndex: 3, avatarSource: Avatar3},
            {avatarIndex: 4, avatarSource: Avatar4},
        ]

        const selectAvatar = AvalibleAvatars.find(x => x.avatarIndex === who)

        return <Avatar src={ <img src={selectAvatar.avatarSource} alt="Selected avatar"></img> } />
    }

    return <Card size="small" title={getPriorityAndSetIntoTitle()} extra={getCardButtons()}>
        <div>
            {whatToDo}
        </div>
        <Footer>
            <span> Created at {new Date().toLocaleDateString()}</span>
            <span> {generateWhoOnFooter()} </span>
        </Footer>
    </Card>

}