import React from 'react'
import styled from 'styled-components'

const Message = ({ message, timestamp, user, userImage }) => {
    return (
        <MessageContainer>
            <Image>
                <img src={userImage} alt="" />
            </Image>
            <MessageContent>
                <h3>{user} <span>{new Date(timestamp?.toDate()).toLocaleDateString("en-GB")}</span>
                <span>{new Date(timestamp?.toDate()).toLocaleTimeString("en-GB")}</span>

                </h3>

                <p>{message}</p>
            </MessageContent>
        </MessageContainer>
    )
}

const MessageContainer = styled.div`
display: flex;
gap: 1rem;
align-items: center;
min-height: 60px;

:hover{
    background: #F8F8F8;
}
`;

const Image = styled.div`
height: 38px;
width: 38px;
>img{
    border-radius: 6px;
}
`;
const MessageContent = styled.div`
    width: 50vw;
    overflow-wrap: break-word;
    @media (max-width:500px) {
        width: 68vw;
}
>h3{
font-weight: 600;
font-size: 17px;
>span{
    margin-left: 10px;
    font-size: 13px;
    font-weight: 400;
}
}
>p{

    color: #3f3f3f;
}
`;

export default Message