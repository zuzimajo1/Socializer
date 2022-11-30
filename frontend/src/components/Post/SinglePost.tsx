import React, { useState } from 'react'
import { PostProps, Comments } from '../../utils/config';
import { AvatarGroup, styled, TextField } from "@mui/material";
import { ModalColumn, ModalRow, ModalRow2, ModalRow3, UserAvatar2 } from '../../styles/Home.styled';
import TypographyText from '../Text/TypographyText';
import PublicIcon from '@mui/icons-material/Public';
import moment from "moment";
import SingleComment, { Container } from './SingleComment';
import ButtonSubmit from '../Form/ButtonSubmit';
import TypographyMainText from '../Text/TypographyMainText';
import ButtonIcon from '../Header/ButtonIcon';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteMenu from '../Header/DeleteMenu';

const SinglePost = (props: PostProps) => {
    const { _id, userOwner, post, comments, createdAt, updatedAt, __v } = props;
    const [comment, setcomment] = useState<string | null>();

    const HandleComment = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setcomment(e.currentTarget.value);
    }

    const [AnchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(AnchorEl);


    const HandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const HandleClose = () => {
        setAnchorEl(null);
    }


    return (
        <SinglePostContainer>
            <ModalRow>
                <UserAvatar2 src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="User" />
                <ModalColumn>
                    <FirstRow>
                        <TypographyMainText padding="0" variant="subtitle1" text={`${userOwner.firstname} ${userOwner.lastname}`} />
                        <ButtonIcon fontSize='small' Icon={MoreVertIcon} Click={HandleClick} />
                        <DeleteMenu AnchorEl={AnchorEl} Close={HandleClose} open={open} />
                    </FirstRow>
                    <ModalRow2>
                        <TypographyText variant="subtitle2" text={`${moment(createdAt).fromNow(true)}`} />
                        <PublicIcon fontSize='small' />
                    </ModalRow2>
                    <MarginContainer>
                        <TypographyText variant="subtitle2" text={post} />
                    </MarginContainer>
                </ModalColumn>
            </ModalRow>
            <MarginContainer2 >
                {comments?.map((props: Comments) => (
                    <MarginContainer key={props._id}>
                        <SingleComment  {...props} />
                    </MarginContainer>
                ))}
            </MarginContainer2>
            <Container>
                <UserAvatar2 src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="User" />
                <TextField onChange={HandleComment} sx={{ marginLeft: "var(--padding-sm)" }} size="small" variant="outlined" type="text" fullWidth rows={1} multiline label="Add a comment..." />
            </Container>
            {comment && <ModalRow3>
                <ButtonSubmit title="Post" />
            </ModalRow3>}
        </SinglePostContainer>
    )
}

const SinglePostContainer = styled('div')(({ theme }) => ({
    width: "100%",
    height: "auto",
    backgroundColor: theme.palette.mode === "light" ? "var(--background-color-light)" : "var(--background-color-dark)",
    marginBottom: "var(--padding-sm)",
    borderRadius: "var(--border-radius-sm)",
    padding: "var(--padding-md) var(--padding-lg)",

}))

export const FirstRow = styled('div')({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
})


const MarginContainer = styled('div')({
    width: "100%",
    marginTop: "var(--padding-md)"
})

const MarginContainer2 = styled('div')({
    width: "100%",
    marginTop: "var(--padding-md)",
    borderTop: "1px solid var(--border-color)"
})


export default SinglePost

