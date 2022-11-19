import styled, { css } from "styled-components";
import { IStyledCheckboxProps } from './Index.types';

export const CheckboxGroupWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 1.5rem;
`;

export const TitleSecondary = styled.h2`
    font-weight: 500;
    color: ${props => props.theme.colors.primaryText};
`;

export const CheckboxContent = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const StyledCheckbox = styled.label<IStyledCheckboxProps>`
    padding: 1rem;
    border: 0.2rem solid ${props => props.theme.colors.secondaryBlue};
    font-size: 1.25rem;
    font-weight: 500;
    color: ${props => props.theme.colors.secondaryText};
    transition: 0.25s ease-in-out;

    ${props => props.isChecked && css`
        color: ${props => props.theme.colors.primaryText};
        border-color: ${props => props.theme.colors.primaryText};
    `}
`;

