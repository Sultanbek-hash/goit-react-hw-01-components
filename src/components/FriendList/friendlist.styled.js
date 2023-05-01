import styled from "styled-components";


export const UlList = styled.ul`
    width: 300px;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;

export const LiItem = styled.li`
    background-color: ${p => p.theme.colors.white};
    border: 1px solid ${p => p.theme.colors.white};
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
    margin: 10px 0;
    display: flex;
    align-items: center;
    padding: 5px 15px;
    border-radius: 5px;
`;