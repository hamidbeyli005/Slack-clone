import React from 'react'
import Spinner from 'react-spinkit';
import styled from 'styled-components'

const Loader = () => {
    return (
        <LoaderContainer>
            <img src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/91f64896-759a-41ae-8d14-d540f90c5870.png?w=90&h=90&fit=max&dpr=3&auto=format&q=50" alt="Logo" />

            <Spinner color='blue' />

        </LoaderContainer>
    )
}

const LoaderContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 1.5rem;
height: 100vh;
width: 100vw;
>img{
    height: 120px;
    width: 120px;

}
`;

export default Loader