import React, { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

enum ButtonVariant  {
    FIILED = 'filled',
    OUTLINED = 'outlined',
    TRANSPARENT = 'transparent',
}

type Props = {
    variant?: ButtonVariant
} & React.ButtonHTMLAttributes<HTMLButtonElement>


export const Button = ({ children, variant = ButtonVariant.TRANSPARENT, ...rest }: PropsWithChildren<Props>) => {


    return (
        <Container variant={variant} {...rest}>{children}</Container>
    );
};

const Container = styled.button<{variant: ButtonVariant}>`
width: 12.1rem;
height: 3.5rem;
font-weight: 700;
color: white;
${({ variant }) => {
        switch (variant) {
            case ButtonVariant.FIILED:
                return css`
          background-color: white;
        `;
            case ButtonVariant.TRANSPARENT:
                return css`
          background-color: transparent;
        `;
            case ButtonVariant.OUTLINED:
                return css`
          background-color: transparent;
        `;
        }
    }}
`;
