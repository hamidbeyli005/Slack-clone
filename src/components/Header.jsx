"use client";
import styled from "styled-components";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { Avatar, Badge } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";

const Header = () => {
  const [user] = useAuthState(auth);

    return (
        <HeaderContainer>
            <HeaderLeft>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                >
                    <Avatar style={{"cursor":"pointer"}} sx={{ width: 34, height: 34 ,marginLeft:2}} onClick={()=>auth.signOut()} src={user.photoURL} />
                </StyledBadge>
                <WatchLaterOutlinedIcon />
            </HeaderLeft>
            <HeaderSearch>
                <label>
                    <input type="text" placeholder="Search" />
                    <SearchOutlinedIcon />
                </label>
            </HeaderSearch>
            <HeaderRight>
                <HelpOutlineOutlinedIcon />
            </HeaderRight>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
  height: 50px;
  background: #350d36;
  display: flex;
  align-items: center;
  color: #e0dae0;
  padding: 0 4px;
  border-bottom: 1px solid #532753;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0.2;
  > svg {
    margin-right: 24px;
    width: 30px;
    height: 30px;
    padding: 4px;
    border-radius: 6px;
    cursor: pointer;
    :hover{
        background: #5D3D5E;
    }
  }
`;
const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
        backgroundColor: "#44b700",
        color: "#44b700",
        "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "ripple 2.5s infinite ease-in-out",
            border: "1px solid currentColor",
            content: '""',
        },
    },
    "@keyframes ripple": {
        "0%": {
            transform: "scale(.8)",
            opacity: 1,
        },
        "100%": {
            transform: "scale(2.4)",
            opacity: 0,
        },
    },
}));

const HeaderSearch = styled.div`
  flex: 0.6;
  position: relative;
  @media ( max-width:768px) {
    display:none;
  }

  > label {
    width: 100%;
    display: flex;
    align-items: center;
    > input {
      background: #644565;
      width: 96%;
      height: 28px;
      border-radius: 4px;
      outline: none;
      border: none;
      color: white;
      padding: 2px 6px;
      font-size: 15px;
      ::placeholder {
        color: white;
        opacity: 0.9;
      }
    }
    > svg {
      position: absolute;
      right: calc(4% + 6px);
      cursor: pointer;

    }
  }
`;
const HeaderRight = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: flex-end;
  margin-right: 8px;
  >svg{
    cursor: pointer;
    padding: 4px;
    width: 30px;
    height: 30px;
    border-radius: 6px;

       :hover{
        background: #5D3D5E;
    }
  }
`;

export default Header;
