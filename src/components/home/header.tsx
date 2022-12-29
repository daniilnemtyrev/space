import React from 'react';
import styled from 'styled-components';
import { DiscordLogo, Logo, TwitterLogo } from '../../icons';
import { MLogo } from '../../icons';
import { Button } from '../ui';

export const Header = () => {
    return (
        <Container>
            <Logo />
            <Socials>
                <DiscordLogo />
                <TwitterLogo />
                <MLogo />
                <Button>Whithorse</Button>
            </Socials>
        </Container>
    );
};

const Container = styled.header`
    display: flex;
    align-items: end;
    justify-content: space-between;
`;

const Socials = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
`;
