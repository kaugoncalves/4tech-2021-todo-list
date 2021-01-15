import React, { useState } from 'react'
import styled from 'styled-components'

import { Avatar } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { whoList } from '../../../helpers/whoList';



export const Who = ({ initialSelectedWho, onChangeSelectedWho }) => {
    const [selectedwho, setSelectedWho] = useState(initialSelectedWho)

    const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    padding-left: 1rem`

    const WhoLabel = styled.div`
    font-size: 30px;
    `

    const WhoSelectionArea = styled.div`
    display: flex;
    height: 5rem;
    background: #FFFFFF;
    box-shadow: 5px 5px 10px #A9C4DA;
    border-radius: 5px;`

    const ScrollLeftOrRightArrow = styled.div`    
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;`

    const ThreeAvatarsArea = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;`

    const generateAvatars = () => {
        return whoList
            .map((x, i) => {
                return <Avatar
                    key={i}
                    style={getAvatarStyle(x.idx)}
                    onClick={() => {
                        setSelectedWho(x.idx)
                        onChangeSelectedWho(x.idx)
                    }}
                    icon={< img src={x.avatarSource} alt={`Avatar ${x.idx}`} />}
                />
            })
    }

    const getAvatarStyle = (avatarIndex) => {
        if (avatarIndex === selectedwho) {
            return {
                border: '5px solid #5BF326',
                boxSizing: 'border-box',
                cursor: 'pointer',
                height: 'calc(3rem + 5px)',
                width: 'calc(3rem + 5px)',
                margin: '0 0.3rem'
            }
        }

        return {
            cursor: 'pointer',
            height: '3rem',
            width: '3rem',
            margin: '0 0.3rem'
        }
    }

    const onClickRight = () => {
        if (selectedwho === 4) {
            return setSelectedWho(1)
        }

        setSelectedWho(selectedwho + 1)
    }

    const onClickLeft = () => {
        if (selectedwho === 1) {
            return setSelectedWho(4)
        }

        setSelectedWho(selectedwho - 1)
    }

    return <FormItem>
        <WhoLabel> Who </WhoLabel>
        <WhoSelectionArea>
            <ScrollLeftOrRightArrow onClick={onClickLeft}>
                <LeftOutlined />
            </ScrollLeftOrRightArrow>
            <ThreeAvatarsArea>
                {generateAvatars()}
            </ThreeAvatarsArea>
            <ScrollLeftOrRightArrow onClick={onClickRight}>
                <RightOutlined />
            </ScrollLeftOrRightArrow>
        </WhoSelectionArea>
    </FormItem>

}