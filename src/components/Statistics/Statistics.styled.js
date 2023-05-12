import styled from "styled-components";


export const SectionStat = styled.section`
    width: 400px;
    height: auto;
    background-color: ${p => p.theme.colors.backgroundColor};
    margin: 0 auto;
    margin-top: 20px;
    padding: 30px 0;
`;
export const DivBoard = styled.div`
    
`;

export const H2Text = styled.h2`
    padding: 30px;
    text-align: center;
    color: ${p => p.theme.colors.shiftColor};
    text-transform: uppercase;
    width: 350px;
    height: auto;
    background-color: ${p => p.theme.colors.white};
    margin: 0 auto;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
`;

export const UlBgkColor = styled.ul`
    width: 350px;
    height: auto;
    background-color: ${p => p.getRandomColor};
    margin: 0 auto;
    display: flex;
    background-color: #A43CF4;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;

export const LibgkColor = styled.li`
    display: flex;
    width: 87.5px;
    flex-direction: column;
    text-align: center;
    padding: 5px;
    border: 1px solid ${p => p.theme.colors.white};
`;

export const SpanLabel = styled.span`
    color: ${p => p.theme.colors.white};
    font-size: 16px;
    line-height: 1.8;
`;

export const SpanPercentage = styled.span`
    color: ${p => p.theme.colors.white};
    font-size: 22px;
    text-transform: uppercase;
    line-height: 2;
`;