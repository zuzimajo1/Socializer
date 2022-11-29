import { useState } from 'react';
import { ButtonIcon, Header, PostModal, TypographyText } from '../components';
import { Avatar, Modal } from "@mui/material";
import { AuthContainer, Subtext } from '../styles/Auth.styled'
import { HomeContainer, HomeDivision, HomeDivision2, ModalButton, Post, UserAvatar, UserAvatar2 } from '../styles/Home.styled'
import User from "../assets/Logo.png"


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
              <PostModal Close={HandleClose}/>
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