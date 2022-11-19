import styled from "styled-components";
import { Form } from 'formik';

export const FormWrapper = styled.div`
    display: grid;
    grid-template-rows: minmax(5rem, max-content) 1fr;
    gap: ${props => props.theme.margin.medium};
    padding: ${props => props.theme.padding.large} ${props => props.theme.padding.large};
    background-color: ${props => props.theme.colors.primaryBlue};
`;

export const FormHeader = styled.div`
    display: flex;
    flex-flow: column;
    gap: 1.5rem;
`;

export const Title = styled.h1`
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
`;

export const Subtitle = styled.h3`
    font-weight: 500;
    color: ${props => props.theme.colors.secondaryText};
`;

export const FormBodyWrapper = styled.div`
    position: relative;
    background-color: ${props => props.theme.colors.accentColor};
`;

export const FormBody = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
`;

export const FormBodyContent = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
`;

export const StyledForm = styled(Form)`

`;

