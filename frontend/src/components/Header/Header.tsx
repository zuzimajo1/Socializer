import { styled } from '@mui/material';
import { useSnackbar  } from "notistack";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/rtk.hooks'; 
import ThemeToggler from './ThemeToggler';
import Logo from "../../assets/Logo.png";
import UserMenu from './UserMenu';
import ButtonIcon from './ButtonIcon';
import { fetchAllPost } from '../../features/asyncThunk';



interface Props {
  login : boolean;
}


export const Header = ({ login }: Props) => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const HandleClick = () => {
    navigate("/")
    dispatch(fetchAllPost());
  }

  return (
    <HeaderContainer>
      <FirstDivision>
        <Image src={Logo} alt="Logo"></Image>
      </FirstDivision>
      <SecondDivision>
        {login &&
          <>
            <ButtonIcon fontSize='medium' Click={HandleClick} Icon={HomeIcon} title="Press to navigate/refresh" />
            <UserMenu />
          </>
        }
        <ThemeToggler />
      </SecondDivision>
    </HeaderContainer>
  )
}



const HeaderContainer = styled('header')(({ theme }) => ({
  width: "100%",
  height: "55px",
  zIndex: "99",
  display: "flex",
  position: "fixed",
  alignItems: "center",
  padding: "0 var(--padding-lg)",
  backgroundColor: theme.palette.mode === "light" ? "var(--background-color-light)" : "var(--background-color-dark)",

  [theme.breakpoints.down('md')]: {
    padding: "0 var(--padding-md)",
  },


}))

const Image = styled('img')({
  width: "50px",
  height: "50px",
})

const FirstDivision = styled('div')({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
})

const SecondDivision = styled('div')({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
})

export default Header