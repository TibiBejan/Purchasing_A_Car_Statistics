import { FieldArray } from "formik";
import { FC } from "react";
import { CheckboxContent, CheckboxGroupWrapper, StyledCheckbox, TitleSecondary } from './Index.styles';
import { IProps } from "./Index.types";

const CheckboxGroup: FC<IProps> = ({ fieldName, fields, formValues }) => {
    return (
        <CheckboxGroupWrapper>
            <TitleSecondary>I'm interested in...</TitleSecondary>
            <FieldArray name={fieldName}>
                {({ push, remove }) => (
                    <CheckboxContent>
                        {
                            fields.length > 0 && fields.map((bodyType, index) => (
                                <StyledCheckbox 
                                    key={`${bodyType.id}-${index}`}
                                    isChecked={formValues.includes(bodyType.name)}    
                                >
                                    <input 
                                        name={fieldName}
                                        type="checkbox"
                                        value={bodyType.name}
                                        checked={formValues.includes(bodyType.name)}
                                        onChange={(e) => {
                                            if(e.target.checked) {
                                                push(bodyType.name)
                                            }  else {
                                                const currentCheck = formValues.indexOf(bodyType.name)
                                                remove(currentCheck);
                                            }
                                        }}
                                    />
                                    {bodyType.name}
                                </StyledCheckbox>
                            ))
                        }
                    </CheckboxContent>
                )}
            </FieldArray>
        </CheckboxGroupWrapper>
    )
}

export { CheckboxGroup };

