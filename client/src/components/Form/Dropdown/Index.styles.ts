import { Field } from "formik";
import styled from "styled-components";

export const DropdownWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 0.5rem;

    select {
        width: 100%;
        padding: 1rem;
        border: 0.2rem solid ${props => props.theme.colors.secondaryBlue};
        font-size: 1.25rem;
        font-weight: 400;
        color: ${props => props.theme.colors.primaryText};
        transition: 0.25s ease-in-out;
    
        option {
            background-color: ${props => props.theme.colors.secondaryBlue};
        }
    
        &:focus {
            border-color: ${props => props.theme.colors.primaryText};
        }
    }
`;