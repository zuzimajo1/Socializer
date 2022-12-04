import React, { useState } from 'react'
import { ButtonIcon, ButtonSubmit, Header, TypographyText, UserAvatar } from '../components'
import { Container, FullWidthCenterPaddingContainer, MainContainer } from '../styles/Containers.styled'
import { Menu, MenuItem, ListItemIcon, Modal, styled } from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import KeyIcon from '@mui/icons-material/Key';
import { ModalContainer, ModalWrapper } from '../styles/Home.styled';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import { useSnackbar } from "notistack"

const Profile = () => {
    const [File, setFile] = useState({});
    const [Img, setImg] = useState<string>("");
    const [loading, setloading] = useState<boolean>(false);
    const [AnchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(AnchorEl);

    const { enqueueSnackbar } = useSnackbar();

    const HandleClick = (event: React.MouseEvent<HTMLDivElement>) => setAnchorEl(event.currentTarget);
    const HandleClose = () => setAnchorEl(null);

    const [openModalImage, setOpenModalImage] = useState<boolean>(false);
    const HandleOpenModalImage = () => {
        setOpenModalImage(true);
        HandleClose();
    }
    const HandleCloseModalImage = () => setOpenModalImage(false);

    const HandleButton = () => setloading(true);


    const HandleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (!(event.target?.files)) {
            setFile(File)
        } else {
            if ((event.target?.files[0].type === "image/jpeg") || event.target?.files[0].type === "image/png") {
                let file = event.target?.files[0];
                const image = URL.createObjectURL(file);
                setImg(image);
                setFile(file)
            } else {
                enqueueSnackbar('Not an image type', { variant: 'warning' });
            }
        }
    }

    return (
        <MainContainer>
            <Header login />
            <FullWidthCenterPaddingContainer>
                <Container margin="var(--spacing-xl) 0" borderRadius="var(--border-radius-sm)" width="500px" display="flex" alignItems="center" justifyContent="center" vertical height="auto" padding="var(--padding-md) var(--padding-lg)" backgroundColorLight="var(--background-color-light)" backgroundColorDark="var(--background-color-dark)" >
                    <UserAvatar cursor="pointer" click={HandleClick} margin="var(--spacing-md) 0 var(--spacing-md) 0" src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="User" width="110px" height="110px" />
                    <Menu sx={{ padding: "var(--padding-sm) var(--padding-md)" }} anchorEl={AnchorEl} open={open} onClose={HandleClose}>
                        <MenuItem onClick={HandleOpenModalImage}>
                            <ListItemIcon>
                                <InsertPhotoIcon fontSize='small' />
                            </ListItemIcon>
                            <ListItemIcon>
                                Change Profile Picture
                            </ListItemIcon>
                        </MenuItem>
                        <MenuItem >
                            <ListItemIcon>
                                <KeyIcon fontSize='small' />
                            </ListItemIcon>
                            <ListItemIcon>
                                Change Password
                            </ListItemIcon>
                        </MenuItem>
                    </Menu>
                    <Modal open={openModalImage} onClose={HandleCloseModalImage}>
                        <ModalContainer>
                            <ModalWrapper>
                                <TypographyText variant="h6" text="Change Profile Picture" />
                                <ButtonIcon fontSize='medium' Click={HandleCloseModalImage} Icon={CloseIcon} />
                            </ModalWrapper>
                            <Container width="100%" display="flex" justifyContent="center" alignItems="center" vertical height="auto" padding="var(--padding-xs) var(--padding-md)" >
                                <Label htmlFor="img">
                                    <Container padding="var(--padding-md) var(--padding-sm)" display="flex" width="100%" height="auto" justifyContent="center" alignItems='center'>
                                        <InsertPhotoIcon sx={{ marginRight: "var(--padding-xs)" }} fontSize="medium" />
                                        <TypographyText variant="h6" text="Select Image" />
                                    </Container>
                                </Label>
                                {Img &&
                                    <>
                                        <Image src={Img} />
                                        <ButtonSubmit click={HandleButton} Loading={loading} Icon={SaveIcon} padding="var(--padding-xs) var(--padding-md)" variant="contained" title="Save" />
                                    </>
                                }
                                <Input type="file" id="img" name="img" onChange={HandleImage} ></Input>
                            </Container>
                        </ModalContainer>
                    </Modal>
                    <TypographyText padding="var(--padding-sm) 0" text="Zuzim Ajo" fontweigth="600" variant="h4" lightcolor="var(--text-color-light)" darkcolor="var(--text-color-dark)" />
                </Container>
            </FullWidthCenterPaddingContainer>
        </MainContainer>
    )
}


const Input = styled('input')({
    display: "none",
    cursor: "pointer",
})


const Label = styled('label')({
    cursor: "pointer",

})

const Image = styled('img')({
    width: "280px",
    height: "200px"
})


export default Profile