import { useState } from 'react';
import { ButtonIcon, Header, TypographyText } from '../components';
import { Avatar, Modal } from "@mui/material";
import { AuthContainer, Subtext } from '../styles/Auth.styled'
import { HomeContainer, HomeDivision, HomeDivision2, ModalButton, ModalColumn, ModalContainer, ModalRow, ModalRow2, ModalText, ModalWrapper, ModalWrapper2, Post, UserAvatar, UserAvatar2 } from '../styles/Home.styled'
import User from "../assets/Logo.png"
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';

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
                <TypographyText variant="h6" text="Create a Post" />
                  <ButtonIcon Click={HandleClose} Icon={CloseIcon}/>
                </ModalWrapper>
                <ModalWrapper2>
                  <ModalRow>
                  <UserAvatar2 src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="User" />
                    <ModalColumn>
                      <TypographyText  variant="subtitle1" text="Zuzim Ajo"/>
                        <ModalRow2>
                        <PublicIcon fontSize='small'/>
                        <TypographyText variant="subtitle2" text="Public" />
                        </ModalRow2>
                    </ModalColumn>
                  </ModalRow>
                </ModalWrapper2>
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