import React, { useState } from 'react'
import { styled, TextField } from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from "moment";

import SingleComment from './SingleComment';
import ButtonSubmit from '../Form/ButtonSubmit';
import ButtonIcon from '../Header/ButtonIcon';
import DeleteMenu from '../Header/DeleteMenu';
import UserAvatar from '../Image/UserAvatar';
// import { PostProps, Comments } from '../../utils/config';
import TypographyText from '../Text/TypographyText';
import { Container } from '../../styles/Containers.styled';
import { Comments, PostProps } from '../../utils/types';

const SinglePost = (props: PostProps) => {
    const { _id, userOwner, post, comments, createdAt} = props;
    const [comment, setcomment] = useState<string | null>();

    const HandleComment = (e: React.ChangeEvent<HTMLTextAreaElement>): void => setcomment(e.currentTarget.value);

    const [AnchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(AnchorEl);

    const HandleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const HandleClose = () => setAnchorEl(null);


    return (
        <SinglePostContainer>
            <Container display="flex" width="100%" >
                <UserAvatar width="50px" height="50px" src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="User" />
                <Container width="100%" height="100%" display="flex" vertical margin="0 0 0 10px"  >
                    <Container width="100%" display="flex" justifyContent="space-between" alignItems="start">
                        <TypographyText textTransform="capitalize" fontweigth="600" lightcolor="var(--maintext-color-light)" darkcolor="var(--maintext-color-dark)" variant="subtitle1" text={`${userOwner.firstname} ${userOwner.lastname}`} />
                        <ButtonIcon fontSize='small' Icon={MoreVertIcon} Click={HandleClick} />
                        <DeleteMenu AnchorEl={AnchorEl} Close={HandleClose} open={open} />
                    </Container>
                    <Container border="1px solid var(--border-color)" borderRadius="var(--border-radius-sm)" display="flex"  justifyContent="center"  alignItems="center" width="80px"  >
                        <TypographyText fontweigth="400" lightcolor="var(--text-color-light)" darkcolor="var(--text-color-dark)" variant="subtitle2" text={`${moment(createdAt).fromNow(true)}`} />
                        <PublicIcon fontSize='small' />
                    </Container>
                    <Container width="100%" margin="var(--padding-md) 0 0 0">
                        <TypographyText fontweigth="400" lightcolor="var(--text-color-light)" darkcolor="var(--text-color-dark)"  variant="subtitle2" text={post} />
                    </Container>
                </Container>
            </Container>
            <MarginContainer2 >
                {comments?.map((props: Comments) => (
                    <Container width="100%" margin="var(--padding-md) 0 0 0"   key={props._id}>
                        <SingleComment  {...props} />
                    </Container>
                ))}
            </MarginContainer2>
            <Container width="100%" height="auto" display="flex" margin="var(--padding-sm) 0 0 0">
                <UserAvatar width="50px" height="50px" src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="User" />
                <TextField onChange={HandleComment} sx={{ marginLeft: "var(--padding-sm)" }} size="small" variant="outlined" type="text" fullWidth rows={1} multiline label="Add a comment..." />
            </Container>
            {comment && <Container width="100%" display="flex" justifyContent="end"   >
                <ButtonSubmit variant="outlined" title="Post" />
            </Container>}
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


const MarginContainer2 = styled('div')({
    width: "100%",
    marginTop: "var(--padding-md)",
    borderTop: "1px solid var(--border-color)"
})


export default SinglePost

