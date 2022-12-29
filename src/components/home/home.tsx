import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Header } from './header';

export const Home = () => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <Header />
            <Title>{t('home.title')}</Title>
        </Wrapper>

    );
};

const Wrapper = styled.div`
height: 100vh;
background: url('backgrounds/home.jpg');
background-size: cover;
background-repeat: no-repeat;
position: relative;
overflow: hidden;
display: flex;
flex-direction: column;

&::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 25rem;
    height: 18rem;
    background: #F1A347;
    opacity: 0.8;
    filter: blur(190px);
}

&::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 25rem;
    height: 25rem;
    background: rgba(255, 114, 190, 0.5);
    opacity: 0.9;
    filter: blur(190px);
}
`;

const Title = styled.h1`
font-size: 4.1rem;
letter-spacing: 2rem;
text-align: center;
`;
