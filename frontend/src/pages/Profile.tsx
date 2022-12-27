import React, { useState, useEffect } from 'react'
import { Menu, MenuItem, ListItemIcon, Modal, styled, Badge, Avatar } from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import { useSnackbar } from "notistack"
import { useNavigate } from 'react-router-dom';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { getStorage, ref, uploadBytesResumable, getDownloadURL  } from "firebase/storage";

import { firebaseapp } from '../firebase';
import { ButtonIcon, ButtonSubmit, Header, TypographyText, UserAvatar, CheckPassword, UserChangeImage } from '../components'
import {  Container, FullWidthCenterPaddingContainer, MainContainer } from '../styles/Containers.styled'
import { ModalContainer, ModalWrapper } from '../styles/Home.styled';
import { Form, Input } from '../styles/Auth.styled';
import { isEmpty, isError, isLoggedIn } from '../utils/helpers';
import { useAppDispatch, useAppSelector } from '../hooks/rtk.hooks';
import { refreshAll, userChangePassword, userSetImage } from '../features/asyncThunk';
import { IChangePassword, IDispatchResponse } from '../utils/types';

const Profile = () => {
    const [AnchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(AnchorEl);
    const auth: any = useAppSelector(state => state?.auth);
    const dispatch = useAppDispatch();

  
    const HandleClose = () => setAnchorEl(null);
    const [openModalImage, setOpenModalImage] = useState<boolean>(false);
    const [openModalPassword, setOpenModalPassword] = useState<boolean>(false);
    const HandleOpenModalImage = () => {
        setOpenModalImage(true);
        HandleClose();
    }
    const HandleOpenModalChangePassword = (event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        setOpenModalPassword(true);
        HandleClose();
    }

    useEffect(()=>{
        dispatch(refreshAll());
    },[dispatch])



    return (
        <MainContainer>
            <Header login />
            <FullWidthCenterPaddingContainer>
                <Container margin="var(--spacing-xl) 0" borderRadius="var(--border-radius-sm)" width="500px" display="flex" alignItems="center" justifyContent="center" vertical height="auto" padding="var(--padding-md) var(--padding-lg)" backgroundColorLight="var(--background-color-light)" backgroundColorDark="var(--background-color-dark)" >
                    <UserChangeImage setAnchorEl={setAnchorEl}/>
                    <Menu sx={{ padding: "var(--padding-sm) var(--padding-md)" }} anchorEl={AnchorEl} open={open} onClose={HandleClose}>
                        <MenuItem onClick={HandleOpenModalImage}>
                            <ListItemIcon>
                                <InsertPhotoIcon fontSize='small' />
                            </ListItemIcon>
                            <ListItemIcon>
                                Change Profile Picture
                            </ListItemIcon>
                        </MenuItem>
                    </Menu>
                    <ChangePictureModal modalImage={openModalImage} CloseModal={setOpenModalImage} />
                    <ChangePasswordModal modalImage={openModalPassword} CloseModal={setOpenModalPassword} />
                    <TypographyText padding="var(--padding-sm) 0" text={`${auth.user?.firstname} ${auth.user?.lastname}`} fontweigth="600" variant="h4" lightcolor="var(--text-color-light)" darkcolor="var(--text-color-dark)" />
                    <ButtonSubmit click={HandleOpenModalChangePassword} title="Change Password" variant="outlined"  />
                </Container>
            </FullWidthCenterPaddingContainer>
        </MainContainer>
    )
}


interface Props {
    modalImage: boolean;
    CloseModal: React.Dispatch<React.SetStateAction<boolean>>;
    
}


const ChangePictureModal: React.FC<Props> = ({ modalImage, CloseModal}: Props) => {
    const { enqueueSnackbar } = useSnackbar();
    const [File, setFile] = useState([] as any);
    const [Img, setImg] = useState<string>("");
    const [loading, setloading] = useState<boolean>(false);
    const dispatch = useAppDispatch();

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


    const HandleButton = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setloading(true);
        const uploadData = new FormData();
        uploadData.append("image", File);
        try {
            const storage = getStorage(firebaseapp);
            // Upload file and metadata to the object 'images/mountains.jpg'
            const storageRef = ref(storage, "images/" + File.name);
            const uploadTask = uploadBytesResumable(storageRef, File);
            
            uploadTask.on('state_changed', (snapshot)=>{

                 // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                enqueueSnackbar('Upload is ' + progress.toFixed() + '% done', { variant: "info", autoHideDuration: 500});
            },
            (error)=> enqueueSnackbar('Upload failed', { variant: "error" }),
             ()=>{
                  // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL)=>{
                const res: IDispatchResponse = await dispatch(userSetImage(downloadURL));
                res.payload ? enqueueSnackbar("Profile image changed successfully!", { variant: "success" }) : enqueueSnackbar("Changing profile image failed!", { variant: "error" })
            })})

        
            setloading(false);
            CloseModal(false);
        } catch (error: any) {
            isError(error);
        }
    };
   


    return (
        <Modal open={modalImage} onClose={() => CloseModal(false)}>
            <ModalContainer>
                <ModalWrapper>
                    <TypographyText lightcolor="var(--maintext-color-light)" darkcolor="var(--maintext-color-dark)" variant="h6" text="Change Profile Picture" />
                    <ButtonIcon fontSize='medium' Click={() => CloseModal(false)} Icon={CloseIcon} />
                </ModalWrapper>
                <Container width="100%" display="flex" justifyContent="center" alignItems="center" vertical height="auto" padding="var(--padding-xs) var(--padding-md)" >
                    <Label htmlFor="img">
                        <Container padding="var(--padding-md) var(--padding-sm)" display="flex" width="100%" height="auto" justifyContent="center" alignItems='center'>
                            <InsertPhotoIcon sx={{ marginRight: "var(--padding-xs)" }} fontSize="medium" />
                            <TypographyText lightcolor="var(--text-color-light)" darkcolor="var(--text-color-dark)" fontweigth="400" variant="h6" text="Select Image" />
                        </Container>
                    </Label>
                    {Img &&
                        <>
                            <Image src={Img} />
                            <ButtonSubmit click={HandleButton} Loading={loading} Icon={SaveIcon} padding="var(--padding-xs) var(--padding-md)" variant="contained" title="Save" />
                        </>
                    }
                    <InputFile type="file" id="img" name="image" onChange={HandleImage} ></InputFile>
                </Container>
            </ModalContainer>
        </Modal>
    )
}




const ChangePasswordModal: React.FC<Props> = ({ modalImage, CloseModal }: Props)=> {
    const [check, setcheck] = useState<boolean>(false);

    const [data, setdata] = useState({} as IChangePassword);
    const { enqueueSnackbar } = useSnackbar();
    const [loading, setloading] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const HandleInputs = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setdata({...data, [e.currentTarget.name]: e.currentTarget.value});
    }

    const HandleChangePassword = async (e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        const { currentpassword, newpassword, confirmnewpassword } = data;

        try {
            if (isEmpty(currentpassword)) return enqueueSnackbar("Field current password is required", { variant: "warning" });
            if (isEmpty(newpassword)) return enqueueSnackbar("Field new password is required", { variant: "warning" });
            if (newpassword.length <= 4) return enqueueSnackbar("Password must be 5 characters or greater", { variant: "warning" });
            if (isEmpty(confirmnewpassword)) return enqueueSnackbar("Field confirm new password is required", { variant: "warning" });
            if (newpassword !== confirmnewpassword) return enqueueSnackbar("Password didn't match", { variant: "warning" });
            
            setloading(true);
            const data = {
                currentpassword,
                newpassword,
                confirmnewpassword,
            } as IChangePassword

            const res: IDispatchResponse =  await dispatch(userChangePassword(data));
            res.payload ? enqueueSnackbar("Change password successfully!", { variant: "success" }) : enqueueSnackbar("Change Password failed!", { variant: "error" })
            setloading(false);
            CloseModal(false);

        } catch (error: any) {
            isError(error);
        }
    }




    return(
        <Modal open={modalImage} onClose={() => CloseModal(false)}>
            <ModalContainer>
                <ModalWrapper>
                    <TypographyText lightcolor="var(--maintext-color-light)" darkcolor="var(--maintext-color-dark)" variant="h6" text="Change Password" />
                    <ButtonIcon fontSize='medium' Click={() => CloseModal(false)} Icon={CloseIcon} />
                </ModalWrapper>
                <Container width="100%" display="flex" padding="var(--padding-md) 0" justifyContent="center" alignItems="center">
                    <Form>
                        <Input size='small' label='Current Password' name='currentpassword' type="text" onChange={HandleInputs}/>
                        <Input size='small' label='New Password' name='newpassword' type={check ? 'text' : 'password'} onChange={HandleInputs} />
                        <Input size='small' label='Confirm Password' name='confirmnewpassword' type={check ? 'text' : 'password'} onChange={HandleInputs} />
                        <CheckPassword Check={setcheck} />
                        <ButtonSubmit Loading={loading} click={HandleChangePassword} variant="contained" title="Save" />
                    </Form> 
                </Container>
            </ModalContainer>
        </Modal>
    )
}






const InputFile = styled('input')({
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