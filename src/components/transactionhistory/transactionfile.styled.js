import styled from 'styled-components';

export const TableTransac = styled.table`
    width: 600px;
    margin: 0 auto;
    margin-top: 20px;
    border: 1px solid ${p => p.theme.colors.white};
    border-radius: 5px;
    text-align: center;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
`;

export const ThTransac = styled.th`
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background-color: #00BCD5;
    text-transform: uppercase;
    padding: 15px 0;
    color: ${p => p.theme.colors.white};
`;

