import styled from "styled-components";

export const FormWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
`;

export const FormContent = styled.form`
    width: 60%;
    height: 75%;
    display: flex;
    flex-flow: column;
    background-color: ${props => props.theme.colors.darkGrayMedium};
`;

export const FormHeader = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${props => props.theme.padding.large};
`;

export const FormBody = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    flex-flow: column;
    align-items: start;
    justify-content: start;
    padding: ${props => props.theme.padding.small} ${props => props.theme.padding.large};
`;