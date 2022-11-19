import { ReactNode } from 'react';

export interface IProps {
    childre?: ReactNode,
    fieldName: string,
    formValues: string[]
    fields: { id: string, name: string }[]
}

export interface IStyledCheckboxProps {
    isChecked: boolean,
}