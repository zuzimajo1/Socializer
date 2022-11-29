import React from 'react';
import { Comments } from '../../utils/config';
import { styled } from '@mui/material';
import TypographyText from '../Text/TypographyText';
import TypographyMainText from '../Text/TypographyMainText';
import { UserAvatar2 } from '../../styles/Home.styled';

const SingleComment = (props: Comments) => {
    const { _id, user, comments, createdAt, updatedAt } = props;

    return (
        <Container>
            <UserAvatar2 src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="User" />
            <CommentContainer>
                <TypographyMainText padding="0.8rem" variant="subtitle2" text={`${user.firstname} ${user.lastname}`} />
                <TypographyText variant="subtitle2" text={comments} />
            </CommentContainer>
        </Container>
    )
}

export const Container = styled('div')({
    width: "100%",
    height: "auto",
    display: "flex",
    marginTop: "var(--padding-sm)"
})


const CommentContainer = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: theme.palette.mode === "light" ? "#8bbfd373" : "#3C4345",
    borderRadius: "var(--padding-sm)",
    marginLeft: "var(--spacing-lg)",
    padding: "var(--padding-xs)",
}))





export default SingleComment