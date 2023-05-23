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

export default function RootLayout({ children }) {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <html lang="en">
        <body>
          <Loader/>
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <body>
        {
          console.log(user)
        }
        {!user ? (
          <Login />
        ) : (
          <Provider store={store}>
            <Header />
            <Wrapper>
              <Sidebar />

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
