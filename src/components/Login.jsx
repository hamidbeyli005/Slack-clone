import styled from "styled-components";
import { signInWithRedirect } from "firebase/auth";
import { auth, provider } from "@/firebase";

const Login = () => {
    const Login = () => {
        signInWithRedirect(auth, provider)
            .then((result) => {
                console.log("Yeni kullanıcı oluşturuldu:", result.user);
            })
            .catch((error) => {
                console.error("Hata:", error.message);
            });
    };
    return (
        <LoginContainer>
            <Wrapper>
                <img
                    src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/91f64896-759a-41ae-8d14-d540f90c5870.png?w=90&h=90&fit=max&dpr=3&auto=format&q=50"
                    alt="Logo"
                />
                <h2>Sign in the Slack-clone</h2>
                <p>hamid.slack.com</p>
                <LoginBtn onClick={Login}>Sign in with Google</LoginBtn>
            </Wrapper>
        </LoginContainer>
    );
};

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: #f8f8f8;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  height: 60%;
  width: 40%;
  border-radius: 8px;
  background: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media (max-width: 800px) {
    width: 80%;
    height: 56%;

  }

  > img {
    width: 100px;
    height: 100px;
  }
  > h2 {
    font-size: 24px;
    font-weight: bold;
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
  > p {
    font-weight: 700px;
  }
`;
const LoginBtn = styled.button`
  background: #259409;
  color: white;
  border: 1px solid white;
  padding: 10px 16px;
  transition: 300ms all;
  border-radius: 10px;
  letter-spacing: 1.5px;
  margin-top: 10px;
  :hover {
    color: #259409;
    background: white;
    border: 1px solid #259409;
  }
`;

export default Login;
