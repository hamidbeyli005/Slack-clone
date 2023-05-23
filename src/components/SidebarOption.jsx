import { db } from "@/firebase";
import { SelectChanneld, enterChannel } from "@/redux/features/appSlice";
import { collection, addDoc } from "firebase/firestore";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";


const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
  const dispatch = useDispatch()


  const addChannel = async () => {
    const channelName = prompt();
    if (channelName) {
      await addDoc(collection(db, "channels"), {
        name: channelName
      });

    }

  }
  const selectChannel = () => {
    if (id) {
      dispatch(enterChannel({ channelId: id }))
    }
  }

  return (
    <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3>
          <span>#</span>
          {title}
        </h3>
      )}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  /* background: green; */
  margin:  2px 0 ;
  cursor: pointer;
  >svg{
    font-size: 18px;
  }
  :hover{
    background: #644565;
  }
  >h3{
    span{
      margin-left: 4px;
      margin-right:10px
    }
  }
`;
