import React, { useState } from 'react';
import { styled, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment';

import UserAvatar from '../Image/UserAvatar';
import { Container } from '../../styles/Containers.styled';
import TypographyText from '../Text/TypographyText';
import ButtonIcon from '../Header/ButtonIcon';
import DeleteMenu from '../Header/DeleteMenu';
import { Comments, ICommentDelete, IDispatchResponse } from '../../utils/types';
import { useAppDispatch } from '../../hooks/rtk.hooks';
import { userDeleteComment } from '../../features/asyncThunk';
import { isError } from '../../utils/helpers';


const SingleComment = (props: Comments) => {
    const { _id, user, comments, createdAt, updatedAt, postID, index } = props;

    const [AnchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(AnchorEl);
    const { enqueueSnackbar } = useSnackbar();

    const HandleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const HandleClose = () => setAnchorEl(null);
    const dispatch = useAppDispatch();

    const HandleCommentDelete = async (event: React.SyntheticEvent)=>{
        event.preventDefault();
        try {
            const data = {
                postID,
                commentID: _id,
                index,
            } as ICommentDelete
            const res: IDispatchResponse = await dispatch(userDeleteComment(data));
            setAnchorEl(null)
            res.payload ? enqueueSnackbar("Deleted comment successfully!", { variant: "success" }) : enqueueSnackbar("Deleting comment failed!", { variant: "error" });
        } catch (error: any) {
            isError(error);
        }
    }


    return (
        <Container width="100%" height="auto" display="flex" margin="var(--padding-sm) 0 0 0">
            <UserAvatar width="50px" height="50px" src={user?.img || "https://qph.cf2.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd"} alt="User"/>
            <Container display="flex" vertical width="100%" backgroundColorLight="#8bbfd373" backgroundColorDark="#3C4345" borderRadius="var(--padding-sm)" margin="0 0 0 var(--spacing-lg)" padding="var(--padding-xs)">
                <Container width="100%" display="flex" justifyContent="space-between" alignItems="start">
                    <Container width="100%" display="flex" justifyContent="start">
                        <TypographyText fontweigth="500" lightcolor="var(--maintext-color-light)" darkcolor='var(--maintext-color-dark)'  padding="0 0.8rem 0 0" variant="subtitle2" text={`${user.firstname} ${user.lastname}`} />
                        <CommentCreatedAt >•{moment(createdAt).fromNow(true)}</CommentCreatedAt>
                    </Container>
                    <ButtonIcon fontSize='small' Icon={MoreVertIcon} Click={HandleClick} />
                    <DeleteMenu Click={HandleCommentDelete}  Close={HandleClose} AnchorEl={AnchorEl} open={open} />
                </Container>
                <TypographyText fontweigth="400" lightcolor="var(--text-color-light)" darkcolor='var(--text-color-dark)' variant="subtitle2" text={comments} />
            </Container>
        </Container>
    )
}

const CommentCreatedAt = styled(Typography)(({theme})=>({
    marginLeft: "0.6rem",
    color: theme.palette.mode === 'light' ? 'var(--text-color-light)' : 'var(--text-color-dark)',
    fontSize: "var(--font-size-xs)"
}))


export default SingleComment