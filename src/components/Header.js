import React from 'react';
import Nav from "./Nav";
import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
`;

const Header = (props) => {
    return (
        <StyledHeader>
            <h1>Air Quality AQI</h1>
            <Nav />
        </StyledHeader>
    )
}

export default Header;
