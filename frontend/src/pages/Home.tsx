import { useEffect, useState } from 'react';
import { Modal } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';

import { ButtonIcon, ButtonSubmit, Header, PostContent, StickyAbout, StickyProfile, TypographyText, UserAvatar } from '../components';
import { HomeDivision, HomeDivision2, HomeDivision3, ModalButton, ModalContainer, ModalWrapper, Post, PostField } from '../styles/Home.styled'
import { Container, FullWidthCenterPaddingContainer, MainContainer } from '../styles/Containers.styled';
import { IDispatchResponse, IUser, IUserPost } from '../utils/types';
import { useAppDispatch, useAppSelector } from '../hooks/rtk.hooks';
import { isEmpty, isError, isLoggedIn } from '../utils/helpers';
import { refreshAll, userPost } from '../features/asyncThunk';
import { useSnackbar } from 'notistack';

const Home = () => {

  const auth: any = useAppSelector(state => state?.auth);
  const [open, setOpen] = useState<boolean>(false);
  const HandleOpen = () => setOpen(true);
  const HandleClose = () => setOpen(false);
  const dispatch = useAppDispatch();
  const [post, setpost] = useState<string>("");
  const [loading, setloading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const login = isLoggedIn();

   useEffect(()=>{
     dispatch(refreshAll());
   }, [dispatch])


  const HandlePost = (e: React.ChangeEvent<HTMLTextAreaElement>)=> setpost(e.currentTarget.value);
  

  const HandlePostSubmit = async (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    try {
      if (isEmpty(post)) return enqueueSnackbar("Nothing to post", { variant: "warning" });
      setloading(true);

      const postData = {
        post
      } as IUserPost
      
      const res: IDispatchResponse = await dispatch(userPost(postData));
      res.payload && enqueueSnackbar("Post was created!", { variant: "success" })
      setloading(false);
      setOpen(false)

    } catch (error) {
      isError(error);
      setloading(false);
    }
  }


  return (
    <MainContainer>
      <Header login={login} />
      <FullWidthCenterPaddingContainer>
        <HomeDivision>
          <StickyProfile />
        </HomeDivision>
        <HomeDivision2>
          <Post>
            <UserAvatar margin="0 0.5rem 0" width="60px" height="60px" src={auth?.user?.img || "https://qph.cf2.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd"} alt="User" />
            <ModalButton size='medium' variant="text" onClick={HandleOpen} >{`What's on your mind? ${auth?.user?.firstname}`}</ModalButton>
            <Modal open={open} onClose={HandleClose}>
              <ModalContainer>
                <ModalWrapper>
                  <TypographyText lightcolor="var(--maintext-color-light)" darkcolor="var(--maintext-color-dark)" variant="h6" text="Create a Post" />
                  <ButtonIcon fontSize='medium' Click={HandleClose} Icon={CloseIcon} />
                </ModalWrapper>
                <Container width="100%" height="80%" padding="var(--padding-xs) var(--padding-md)" >
                  <Container display="flex" width="100%">
                    <UserAvatar width="50px" height="50px" src={auth?.user?.img || "https://qph.cf2.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd"} alt="User" />
                    <Container width="100%" display="flex" vertical margin="0 0 0 10px"  >
                      <TypographyText variant="subtitle1" text={`${auth?.user?.firstname} ${auth?.user?.lastname}`} lightcolor="var(--text-color-light)" darkcolor="var(--text-color-dark)" />
                      <Container border="1px solid var(--border-color)" borderRadius='var(--border-radius-sm)' display="flex" justifyContent="center" alignItems="center" width="80px"  >
                        <PublicIcon fontSize='small' />
                        <TypographyText variant="subtitle2" text="Public" lightcolor="var(--text-color-light)" darkcolor="var(--text-color-dark)"  />
                      </Container>
                    </Container>
                  </Container>
                  <PostField onChange={HandlePost} name="post" variant='filled' type="text" fullWidth rows={5} multiline label="What do you want to talk about?" />
                    <Container width="100%" display="flex" justifyContent="end">
                    <ButtonSubmit click={HandlePostSubmit} Loading={loading} variant="contained" title="Post" />
                    </Container>
                </Container>
              </ModalContainer>
            </Modal>
          </Post>
          <PostContent />
        </HomeDivision2>
        <HomeDivision3>
          <StickyAbout />
        </HomeDivision3>
      </FullWidthCenterPaddingContainer>
    </MainContainer>
  )
}




export default Home