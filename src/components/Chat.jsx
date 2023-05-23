"use client";
import styled from "styled-components";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InfoIcon from "@mui/icons-material/Info";
import ChatInput from "./ChatInput";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { auth, db } from "@/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, doc, getDoc, onSnapshot, orderBy, query } from "firebase/firestore";
import Message from "./Message";
import { useAuthState } from "react-firebase-hooks/auth";

const Chat = () => {
  const channelId = useSelector(state => state.app.channelId)
  const [channelDetails, setChannelDetails] = useState(null);
  const [channelMessages, setChannelMessages] = useState([]);
  const messageListRef = useRef(null);



  useEffect(() => {

    // scrollToBottom();

    if (channelId) {
      onSnapshot(doc(db, "channels", channelId), (doc) => {
        setChannelDetails(doc.data())
      });
    }

    const messagesRef = collection(db, "channels", channelId, "messages");
    const messagesQuery = query(messagesRef, orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const channelMessages = snapshot.docs.map((doc) => doc.data());
      setChannelMessages(channelMessages);

    });
    return () => {
      unsubscribe();
    };

  }, [channelId]);
  useEffect(() => {
    scrollToBottom();
  }, [channelMessages]);

  const scrollToBottom = () => {
    if (messageListRef.current) {
      messageListRef.current.scrollTo({
        top: messageListRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };
  return (
    <ChatContainer>
      <ChatHeader>
        <div>
          #{channelDetails?.name} <StarBorderIcon />{" "}
        </div>
        <div>
          <InfoIcon />
          Details
        </div>
      </ChatHeader>
      <Messages ref={messageListRef}>
        {channelMessages.map(({ message, user, userImage, timestamp }, index) => (
          <Message
            key={index}
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}


      </Messages>
      <div >
        <ChatInput channelId={channelId} channelName={channelDetails?.name} />
      </div>
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
`;
const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 1rem;
  border-bottom: 1px solid #e1e1e1;
  height: 68px;
  > div {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 22px;
    cursor: pointer;

    &:last-child {
      font-size: 16px;

      font-weight: 500;
      color: #61606a;
    }
  }
`;
const Messages = styled.div`
height: calc(100vh - 180px);
overflow-y: auto;
padding: 10px ;
@media (max-width:500px) {
  margin-bottom: 10px;
}
`;
