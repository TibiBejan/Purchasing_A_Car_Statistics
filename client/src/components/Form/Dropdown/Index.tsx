import { Field } from "formik";
import { FC } from "react";
import { FormFieldLabel } from "../Index.styles";
import { DropdownWrapper } from "./Index.styles";
import { IProps } from "./Index.types";

const Dropdown: FC<IProps> = ({ title = "", fieldName, placeholder }) => {
    return (
        <DropdownWrapper>
            { title &&  <FormFieldLabel>{title}</FormFieldLabel>}
            <Field 
                as="select" 
                name={fieldName}
            >
                <option value="">{placeholder}</option>
                <option value="red" label="red">Red</option>
                <option value="green" label="green">Green</option>
                <option value="blue" label="blue">Blue</option>
           </Field>
        </DropdownWrapper>
    )
}

export { Dropdown };

