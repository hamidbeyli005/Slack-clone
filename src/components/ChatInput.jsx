import { Button } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import { addDoc, collection, doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db } from '@/firebase';
import { FirebaseError } from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';



const ChatInput = ({ channelId, channelName }) => {
  const [message, setMessage] = useState("")
  const [user] = useAuthState(auth);



  const sendMessage = async (e) => {
    e.preventDefault();
    if (channelId && message !== "") {
      const messageRef = collection(db, "channels", channelId, "messages");
      try {
        await addDoc(messageRef, {
          message: message,
          timestamp: serverTimestamp(),
          user: user.displayName,
          userImage:user.photoURL

        });
        setMessage("")
        console.log("Message added successfully");
      } catch (error) {
        console.error("Error adding message: ", error);
      }
    }
  }


  return (
    <InputContainer>
      <Input type='text' placeholder={`Message #${channelName}`}
        value={message} onChange={(e) => setMessage(e.target.value)} />
      <Send type='submit' onClick={sendMessage}>

        <SendIcon />
      </Send>
    </InputContainer>
  )
}

export default ChatInput

const InputContainer = styled.form`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
`;
const Input = styled.input`
width: 86%;
height: 44px;
background: #F8F8F8;
border: 1px solid #e1e1e1;
outline: none;
border-radius: 6px;
padding: 0 10px;
`;
const Send = styled.button`
height: 44px;
width: 44px;
background: #F8F8F8;
border: 1px solid #e1e1e1;
border-radius: 6px;
display: flex;
align-items: center;
justify-content: center;
color: #4b4b4b;

`;