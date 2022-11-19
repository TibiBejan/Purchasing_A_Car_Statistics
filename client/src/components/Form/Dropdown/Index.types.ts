import { ReactNode } from "react";

export interface IProps {
    children?: ReactNode,
    title?: string,
    fieldName: string,
    placeholder: string,
}