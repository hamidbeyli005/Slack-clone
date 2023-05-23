"use client"
import Chat from "@/components/Chat";
import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <Main >
                    <Head>
        <title>Yeni Sekme Başlığı</title>
      </Head>
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
