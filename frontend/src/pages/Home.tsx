import { useState } from 'react';
import { ButtonIcon, ButtonSubmit, Header, SinglePost, StickyAbout, StickyProfile, TypographyText, UserAvatar } from '../components';
import { HomeDivision, HomeDivision2, HomeDivision3, ModalButton, ModalContainer, ModalWrapper, Post, PostField } from '../styles/Home.styled'
import { Container, FullWidthCenterPaddingContainer, MainContainer } from '../styles/Containers.styled';
import { Modal } from "@mui/material";
import { Posts, PostProps } from '../utils/config';
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);
  const HandleOpen = () => setOpen(true);
  const HandleClose = () => setOpen(false);

  return (
    <MainContainer>
      <Header login />
      <FullWidthCenterPaddingContainer>
        <HomeDivision>
          <StickyProfile />
        </HomeDivision>
        <HomeDivision2>
          <Post>
            <UserAvatar margin="0 0.5rem 0" width="60px" height="60px" src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="User" />
            <ModalButton size='medium' variant="text" onClick={HandleOpen} >What's on your mind? Zuzim</ModalButton>
            <Modal open={open} onClose={HandleClose}>
              <ModalContainer>
                <ModalWrapper>
                  <TypographyText variant="h6" text="Create a Post" />
                  <ButtonIcon fontSize='medium' Click={HandleClose} Icon={CloseIcon} />
                </ModalWrapper>
                <Container width="100%" height="80%" padding="var(--padding-xs) var(--padding-md)" >
                  <Container display="flex" width="100%">
                    <UserAvatar width="50px" height="50px" src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="User" />
                    <Container width="100%" display="flex" vertical margin="0 0 0 10px"  >
                      <TypographyText variant="subtitle1" text="Zuzim Ajo" />
                      <Container border="1px solid var(--border-color)" borderRadius='var(--border-radius-sm)' display="flex" justifyContent="center" alignItems="center" width="80px"  >
                        <PublicIcon fontSize='small' />
                        <TypographyText variant="subtitle2" text="Public" />
                      </Container>
                    </Container>
                  </Container>
                  <PostField variant='filled' type="text" fullWidth rows={5} multiline label="What do you want to talk about?" />
                    <Container width="100%" display="flex" justifyContent="end">
                    <ButtonSubmit title="Post" />
                    </Container>
                </Container>
              </ModalContainer>
            </Modal>
          </Post>
          <Container width="100%" margin='var(--padding-md) 0 0 0' >
            {Posts.map((props: PostProps) => (
              <SinglePost key={props._id} {...props} />
              ))}
           </Container>
        </HomeDivision2>
        <HomeDivision3>
          <StickyAbout />
        </HomeDivision3>
      </FullWidthCenterPaddingContainer>
    </MainContainer>
  )
}




export default Home