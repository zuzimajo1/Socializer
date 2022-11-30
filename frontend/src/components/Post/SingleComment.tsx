import React, { useState } from 'react';
import { Comments } from '../../utils/config';
import { styled } from '@mui/material';
import TypographyText from '../Text/TypographyText';
import TypographyMainText from '../Text/TypographyMainText';
import { UserAvatar2 } from '../../styles/Home.styled';
import { FirstRow } from './SinglePost';
import ButtonIcon from '../Header/ButtonIcon';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteMenu from '../Header/DeleteMenu';

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
                <TypographyMainText padding="0.8rem" variant="subtitle2" text={`${user.firstname} ${user.lastname}`} />
                    <ButtonIcon fontSize='small' Icon={MoreVertIcon} Click={HandleClick} />
                    <DeleteMenu Close={HandleClose} AnchorEl={AnchorEl} open={open} />
                </FirstRow>
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