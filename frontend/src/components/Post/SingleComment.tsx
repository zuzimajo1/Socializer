import React, { useState } from 'react';
import { Comments } from '../../utils/config';
import { styled, Typography } from '@mui/material';
import TypographyText from '../Text/TypographyText';
import { UserAvatar2 } from '../../styles/Home.styled';
import { FirstRow } from './SinglePost';
import ButtonIcon from '../Header/ButtonIcon';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteMenu from '../Header/DeleteMenu';
import moment from 'moment';

const SingleComment = (props: Comments) => {
    const { _id, user, comments, createdAt, updatedAt } = props;

    const [AnchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(AnchorEl);


    const HandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const HandleClose = () => {
        setAnchorEl(null);
    }

    return (
        <Container>
            <UserAvatar2 src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="User" />
            <CommentContainer>
                <FirstRow>
                    <Division>
                        <TypographyText fontweigth="500" lightcolor="var(--maintext-color-light)" darkcolor='var(--maintext-color-dark)'  padding="0 0.8rem 0 0" variant="subtitle2" text={`${user.firstname} ${user.lastname}`} />
                        <CommentCreatedAt >•{moment(createdAt).fromNow(true)}</CommentCreatedAt>
                    </Division>
                    <ButtonIcon fontSize='small' Icon={MoreVertIcon} Click={HandleClick} />
                    <DeleteMenu Close={HandleClose} AnchorEl={AnchorEl} open={open} />
                </FirstRow>
                <TypographyText fontweigth="400" lightcolor="var(--text-color-light)" darkcolor='var(--text-color-dark)' variant="subtitle2" text={comments} />
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

const CommentCreatedAt = styled(Typography)(({theme})=>({
    marginLeft: "0.6rem",
    color: theme.palette.mode === 'light' ? 'var(--text-color-light)' : 'var(--text-color-dark)',
    fontSize: "var(--font-size-xs)"
}))


export const Division = styled('div')({
    width: "100%",
    display: "flex",
    justifyContent: "start",
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