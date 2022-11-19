import { Form } from 'formik';
import styled from "styled-components";

export const FormWrapper = styled.div`
    display: grid;
    grid-template-rows: minmax(5rem, max-content) 1fr;
    gap: ${props => props.theme.margin.small};
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
`;

export const FormBody = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    padding-right: 1rem;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }
       
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
       
    &::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background-color: ${props => props.theme.colors.accentColor};
    }
`;

export const FormBodyContent = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
`;

export const StyledForm = styled(Form)`
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 5rem;
`;

export const MultipleRowsGroup = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 2.5rem;
`;

export const FormFieldLabel = styled.label`
    font-weight: 500;
    color: ${props => props.theme.colors.secondaryText};
`;

export const RowGroup = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    row-gap: 1rem;

    ${FormFieldLabel} {
        grid-column: 1 / -1;
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    border-radius: 0.5rem;
    background-color: ${props => props.theme.colors.secondaryBlue};
    font-size: 1.25rem;
    font-weight: 500;
    color: ${props => props.theme.colors.accentColor};
    transition: 0.25s ease-in-out;

    &:hover {
        opacity: 0.75;
    }
`;