"use client";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import styled from "styled-components";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Login from "@/components/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import Loader from "@/components/Loader";
import { useWindowWidth } from "@react-hook/window-size";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";
import Drawer from "react-modern-drawer";

export default function RootLayout({ children }) {
  const [user, loading] = useAuthState(auth);
  const onlyWidth = useWindowWidth();

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  if (loading) {
    return (
      <html lang="en">
        <body>
          <Loader />
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <body>
        {!user ? (
          <Login />
        ) : (
          <Provider store={store}>
            <Header toggleDrawer={toggleDrawer} />
            {/* mobile menu */}

            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="left"
              className="bla bla bla"
            >
              <Sidebar toggleDrawer={toggleDrawer} />
            </Drawer>

            {/* mobile menu */}
            <Wrapper>
              {onlyWidth > 500 ? <Sidebar /> : null}
              {children}
            </Wrapper>
          </Provider>
        )}
      </body>
    </html>
  );
}
const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 50px);
`;
