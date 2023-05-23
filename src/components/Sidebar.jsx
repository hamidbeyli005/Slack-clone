import { Add, Create, Drafts, InsertComment, MoreVert } from "@mui/icons-material"
import styled from "styled-components"
import { auth, db } from "@/firebase";
import { collection } from "firebase/firestore";

import SidebarOption from "./SidebarOption"
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import Head from "next/head";

const Sidebar = ({toggleDrawer}) => {
    const [channels, loading, error] = useCollection(collection(db, "channels"));
    const [user] = useAuthState(auth);


    return (
        <SidebarContainer>

            <SidebarHeader>
                <SidebarInfo  >
                    <h2>Slack Clone</h2>
                    <h3>
                        {user?.displayName}
                    </h3>
                </SidebarInfo>
                <Create />
            </SidebarHeader>
            <div onClick={toggleDrawer}>

                <SidebarOption Icon={InsertComment} title="Threads" />
                <SidebarOption Icon={Drafts} title="Saved items" />
                <SidebarOption Icon={MoreVert} title="More" />

                <SidebarOption Icon={Add} addChannelOption title="Add channel" />

                {
                    channels?.docs.map((channel) => (
                        <SidebarOption key={channel.id} title={channel.data().name} id={channel.id} />
                    ))

                }
            </div>




        </SidebarContainer>
    )
}



export default Sidebar

const SidebarContainer = styled.div`
  background: #3F0E40;
  flex: 0.2;
  height: 100%;


`
const SidebarHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color: white;
padding: 10px 12px;
border-bottom: 1px solid #532753;

>svg{
    padding: 6px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    color:#3F0E40;
}
`;
const SidebarInfo = styled.div`
>h2{
    font-size: 16px;
    font-weight: 500;
}
>h3{
    color: #cfcfcf;
    font-size: 15px;
}
`;

