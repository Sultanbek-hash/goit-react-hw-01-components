import styled from "styled-components";

export const ProfileStyled = styled.div` 
    background-color: ${p => p.theme.colors.backgroundColor};
    width: 500px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    padding: 60px 0;
`;
export const WrapperCard = styled.div`
    width: 300px;
    height: auto;
    padding: 20px 0;
    background-color: ${p=>p.theme.colors.white};
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
`;
export const Image = styled.img`
    width: 120px;
    border-radius: 100px;
    margin: 0 auto;
    margin-top: 20px;
`;

export const Ptextname = styled.p`
    font-size: 24px;
    text-align: center;
    font-weight: 500;
    margin-top: 10px;
`;

export const Ptexttag = styled.p`
    font-size: 16px;
    text-align: center;
    color: #D7DBDF;
    line-height: 25px;
`;

export const Stats = styled.ul`
    display: flex;
    width: 300px;
    margin: 0;
`;

export const StatsLi = styled.li`
    display: flex;
    padding: 10px 10px;
    flex-direction: column;
    align-items: center;
    width: 100px;
    background-color: #F3F6F9;
    border-bottom: 1px solid #D7DBDF;
    border-top: 1px solid #D7DBDF;
    :first-child{
        border: 1px solid #D7DBDF;
        border-bottom-left-radius: 5px;
    }
    :last-child{
        border: 1px solid #D7DBDF;
        border-bottom-right-radius: 5px;
    }
`;

export const SpanLabel = styled.span`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    color: #8896A4;
`;

export const SpanQuantity = styled.span`
    font-size: 16px;
    line-height: 1.4;
    font-weight: 700;
    color: #35475A;
`;
