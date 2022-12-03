import React from 'react'
import { Header } from '../components'
import { MainContainer } from '../styles/Containers.styled'

type Props = {}

const Profile = (props: Props) => {
    return (
        <MainContainer>
            <Header login />
        </MainContainer>
    )
}

export default Profile