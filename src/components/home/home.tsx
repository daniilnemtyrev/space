import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export const Home = () => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <Title>{t('home.title')}</Title>
        </Wrapper>

    );
};

const Wrapper = styled.div`
height: 100vh;
background: url('backgrounds/home.jpg');
background-size: cover;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center;
`;

const Title = styled.h1`
font-size: 4.1rem;
letter-spacing: 2rem;
`;
