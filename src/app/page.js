"use client"
import Chat from "@/components/Chat";
import styled from "styled-components";

export default function Home() {
  return (
    <Main >
      <Chat />
    </Main>
  );
}

const Main =styled.div`
flex: 0.8;
@media (max-width:500px){
  padding: 0 1rem;
  flex: 1;
  }
`;
