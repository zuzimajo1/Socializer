import { useState } from 'react';
import { ButtonIcon, Header, UserImage } from '../components';
import { Avatar, Modal } from "@mui/material";
import { AuthContainer, Subtext, Text } from '../styles/Auth.styled'
import { HomeContainer, HomeDivision, HomeDivision2, ModalButton, ModalContainer, ModalText, ModalWrapper, Post, UserAvatar } from '../styles/Home.styled'
import User from "../assets/Logo.png"
import CloseIcon from '@mui/icons-material/Close';

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);

  const HandleOpen = () => setOpen(true);
  const HandleClose = () => setOpen(false);




  return (
    <AuthContainer>
      <Header/>
      <HomeContainer>
        <HomeDivision>
          <h1>Hello</h1>
        </HomeDivision>
        <HomeDivision2>
          <Post>
            <UserAvatar src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="User"/>
            <ModalButton size='medium' variant="text" onClick={HandleOpen} >What's on your mind? Zuzim</ModalButton>
            <Modal open={open} onClose={HandleClose}>
              <ModalContainer>
                <ModalWrapper>
                <ModalText>Create a post</ModalText>
                  <ButtonIcon Click={HandleClose} Icon={CloseIcon}/>
                </ModalWrapper>
              </ModalContainer>
            </Modal>
          </Post>
        </HomeDivision2>
        <HomeDivision>
          <h1>Hello</h1>
        </HomeDivision>
      </HomeContainer>
    </AuthContainer>
  )
}

export default Home