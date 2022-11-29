import { useState } from 'react';
import { ButtonIcon, ButtonSubmit, Header, SinglePost, StickyAbout, StickyProfile, TypographyText } from '../components';
import { Avatar, Modal, Typography, styled, TextField } from "@mui/material";
import { AuthContainer } from '../styles/Auth.styled'
import { HomeContainer, HomeDivision, HomeDivision2, HomeDivision3, ModalButton, ModalColumn, ModalContainer, ModalRow, ModalRow2, ModalRow3, ModalWrapper, ModalWrapper2, Post, PostField, PostMain, UserAvatar, UserAvatar2, } from '../styles/Home.styled'
import { Posts, PostProps } from '../utils/config';
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);
  const HandleOpen = () => setOpen(true);
  const HandleClose = () => setOpen(false);

  return (
    <AuthContainer>
      <Header />
      <HomeContainer>
        <HomeDivision>
          <StickyProfile />
        </HomeDivision>
        <HomeDivision2>
          <Post>
            <UserAvatar src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="User" />
            <ModalButton size='medium' variant="text" onClick={HandleOpen} >What's on your mind? Zuzim</ModalButton>
            <Modal open={open} onClose={HandleClose}>
              <ModalContainer>
                <ModalWrapper>
                  <TypographyText variant="h6" text="Create a Post" />
                  <ButtonIcon Click={HandleClose} Icon={CloseIcon} />
                </ModalWrapper>
                <ModalWrapper2>
                  <ModalRow>
                    <UserAvatar2 src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="User" />
                    <ModalColumn>
                      <TypographyText variant="subtitle1" text="Zuzim Ajo" />
                      <ModalRow2>
                        <PublicIcon fontSize='small' />
                        <TypographyText variant="subtitle2" text="Public" />
                      </ModalRow2>
                    </ModalColumn>
                  </ModalRow>
                  <PostField variant='filled' type="text" fullWidth rows={5} multiline label="What do you want to talk about?" />
                  <ModalRow3>
                    <ButtonSubmit title="Post" />
                  </ModalRow3>
                </ModalWrapper2>
              </ModalContainer>
            </Modal>
          </Post>
          <PostMain>
            {Posts.map((props: PostProps) => (
              <SinglePost key={props._id} {...props} />
            ))}
          </PostMain>
        </HomeDivision2>
        <HomeDivision3>
          <StickyAbout />
        </HomeDivision3>
      </HomeContainer>
    </AuthContainer>
  )
}




export default Home