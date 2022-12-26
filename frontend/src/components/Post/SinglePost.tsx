import React, { useState } from 'react'
import { styled, TextField } from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from "moment";
import { useSnackbar } from 'notistack';

import SingleComment from './SingleComment';
import ButtonSubmit from '../Form/ButtonSubmit';
import ButtonIcon from '../Header/ButtonIcon';
import DeleteMenu from '../Header/DeleteMenu';
import UserAvatar from '../Image/UserAvatar';
import TypographyText from '../Text/TypographyText';
import { Container } from '../../styles/Containers.styled';
import { Comments, ICommentPost, IDispatchResponse, PostProps } from '../../utils/types';
import { useAppDispatch } from '../../hooks/rtk.hooks';
import { userDeletePost, userPostComment } from '../../features/asyncThunk';
import { isEmpty, isError } from '../../utils/helpers';


const SinglePost = (props: PostProps) => {
    const { _id, userOwner, post, comments, createdAt} = props;
    const [comment, setcomment] = useState<string>("");
    const dispatch = useAppDispatch();
    const [loading, setloading] = useState<boolean>(false);
    const { enqueueSnackbar } = useSnackbar();

    const [AnchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(AnchorEl);

    const HandleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const HandleClose = () => setAnchorEl(null);

    const HandlePostDelete = async (e: React.SyntheticEvent) =>{
        e.preventDefault();
        setAnchorEl(null)
        try {
            const res: IDispatchResponse =   await dispatch(userDeletePost(_id));
            res.payload ? enqueueSnackbar("Post was deleted!", { variant: "success" }) : enqueueSnackbar("Not the post owner!", { variant: "error" });
        } catch (error: any) {
            isError(error);
        }
    }

    const HandleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => setcomment(e.currentTarget.value);

    const HandleCommentPost = async (event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        if (isEmpty(comment)) return enqueueSnackbar("No text to comment!", { variant: "warning" });

        const commentdata = {
            postID: _id,
            comments: comment
        } as ICommentPost
        setloading(true);
     
        try {
            const res: IDispatchResponse = await dispatch(userPostComment(commentdata));
            res.payload ? enqueueSnackbar("Commented successfully!", { variant: "success" }) : enqueueSnackbar("Posting comment failed!", { variant: "error" });
            setcomment("");
            setloading(false);
        } catch (error: any) {
            isError(error);
            setloading(false);
        }
    }


    return (
        <SinglePostContainer>
            <Container display="flex" width="100%" >
                <UserAvatar width="50px" height="50px" src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="User" />
                <Container width="100%" height="100%" display="flex" vertical margin="0 0 0 10px"  >
                    <Container width="100%" display="flex" justifyContent="space-between" alignItems="start">
                        <TypographyText textTransform="capitalize" fontweigth="600" lightcolor="var(--maintext-color-light)" darkcolor="var(--maintext-color-dark)" variant="subtitle1" text={`${userOwner?.firstname} ${userOwner?.lastname}`} />
                        <ButtonIcon fontSize='small' Icon={MoreVertIcon} Click={HandleClick} />
                        <DeleteMenu Click={HandlePostDelete} AnchorEl={AnchorEl} Close={HandleClose} open={open} />
                    </Container>
                    <Container width="100%" display="flex" justifyContent="start">
                    <Container border="1px solid var(--border-color)" borderRadius="var(--border-radius-sm)" display="flex"  justifyContent="start"  alignItems="center" width="auto" padding="0 var(--padding-xs)"  >
                        <TypographyText fontweigth="400" lightcolor="var(--text-color-light)" darkcolor="var(--text-color-dark)" variant="subtitle2" text={`${moment(createdAt).fromNow(true)}`} />
                        <PublicIcon fontSize='small' />
                    </Container>
                    </Container>
                    <Container width="100%" margin="var(--padding-md) 0 0 0">
                        <TypographyText fontweigth="400" lightcolor="var(--text-color-light)" darkcolor="var(--text-color-dark)"  variant="subtitle2" text={post} />
                    </Container>
                </Container>
            </Container>
            <MarginContainer2>
                {comments?.map((props: Comments, index: number) => (
                    <Container width="100%" margin="var(--padding-md) 0 0 0" key={props._id}>
                        <SingleComment  {...props} postID={_id} index={index} />
                    </Container>
                ))}
            </MarginContainer2>
            <Container width="100%" height="auto" display="flex" margin="var(--padding-sm) 0 0 0">
                <UserAvatar width="50px" height="50px" src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="User" />
                <TextField value={comment} name="comment" onChange={HandleComment} sx={{ marginLeft: "var(--padding-sm)" }} size="small" variant="outlined" type="text" fullWidth rows={1} multiline label="Add a comment..." />
            </Container>
            {comment && <Container width="100%" display="flex" justifyContent="end"   >
                <ButtonSubmit Loading={loading} click={HandleCommentPost}  variant="outlined" title="Post" />
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

