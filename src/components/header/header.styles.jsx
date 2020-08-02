import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

// styling a react component 
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

// to share style among containers
const OptionContainer = css`
    padding: 10px 15px;
    cursor: pointer;
`;

export const OptionDiv = styled.div`
    ${OptionContainer}
`;

export const OptionLink = styled(Link)`
    ${OptionContainer}
`;
