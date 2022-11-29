import React from 'react';
import { styled, TextField, Typography,  } from '@mui/material';
import ButtonSubmit from "../Form/ButtonSubmit";
import ButtonIcon from '../Header/ButtonIcon';
import TypographyText from '../Text/TypographyText';
import { UserAvatar2 } from '../../styles/Home.styled';
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';

type Props = {
    Close: ()=> void;
}

const PostModal = ({Close}: Props) => {
  return (
      <ModalContainer>
          <ModalWrapper>
              <TypographyText variant="h6" text="Create a Post" />
              <ButtonIcon Click={Close} Icon={CloseIcon} />
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
              <ButtonSubmit title="Post"/>
              </ModalRow3>
          </ModalWrapper2>
      </ModalContainer>
  )
}



const ModalContainer = styled('div')(({ theme }) => ({
    width: "500px",
    height: "auto",
    position: "absolute",
    top: "30%",
    left: "50%",
    padding: "var(--padding-xs) 0",
    borderRadius: "var(--border-radius-sm)",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.mode === "light" ? "var(--background-color-light)" : "var(--background-color-dark)",
}))


const ModalText = styled(Typography)(({ theme }) =>({
    fontSize: "var(--font-size-md)",
    fontFamily: "Poppins",
    color: theme.palette.mode === "light" ? "var(--text-color-light)" : "var(--text-color-dark)",
}))

const ModalWrapper = styled('div')({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 var(--padding-md)",
    borderBottom: "1px solid var(--border-color)",
})


const ModalWrapper2 = styled('div')({
    width: "100%",
    height: "80%",
    padding: "var(--padding-xs) var(--padding-md)"
})

const PostField = styled(TextField)({
    marginTop: "var(--padding-sm)",
    
})

const ModalRow = styled('div')({
    display: "flex",
    width: "100%",
})


const ModalColumn = styled('div')({
    width: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px"
})


const ModalRow2 = styled('div')({
    border: "1px solid var(--border-color)",
    borderRadius: "var(--border-radius-sm)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
})


const ModalRow3 = styled('div')({
    width: "100%",
    display: "flex",
    justifyContent: "end",
})
export default PostModal