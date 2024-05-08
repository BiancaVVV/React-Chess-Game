import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
    background-color: #fbf8f2;

    width: 100%; /* Asigurăm că ocupă întreaga lățime a paginii */
    height: 100vh; /* Asigurăm că ocupă întreaga înălțime a paginii */
`;

const HomeHeader = styled.h1`
    text-align: center;
    color: ${props => props.theme.colors.text};

`;

const HomeParagraph = styled.p`
    text-align: center;

    color: ${props => props.theme.colors.text};
`;

const HomeButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 200px;
    margin: 0 auto;
    align-items: center;
`;

const HomeButton = styled(Link)`
    background: ${props => props.theme.colors.primary};
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #000;
    font-size: 2em;
    margin: 0.5em;
    text-align: center;
`;

const HomeInput = styled.input`
    font-size: 2em;
    width: 140px;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
`;

export const Home: React.FC = () => {
    const idRef = useRef<HTMLInputElement>(null);
    const [id, setId] = useState('');

    return (
        <PageContainer> {/* Schimbăm HomeContainer cu PageContainer */}
            <HomeHeader>START A GAME</HomeHeader>
            <HomeButtonContainer>
                <HomeButton to="/game">local</HomeButton>
                <HomeButton to="/game/bot">bot</HomeButton>
            </HomeButtonContainer>
        </PageContainer >
    );
};
