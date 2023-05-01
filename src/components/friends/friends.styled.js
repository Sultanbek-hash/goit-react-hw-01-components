import styled from "styled-components";

export const Isonline = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 100px;
    background-color: ${ p => (p.isOnline ? 'green' : 'red')};
`;

export const Images = styled.img`
    margin: 0 5px;
`;

export const Pname = styled.p`
    font-size: 24px;
    font-weight: 500;
    line-height: 35px; 
`;