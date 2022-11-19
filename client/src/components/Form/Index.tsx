import { FC } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { IDefaultProps } from '../../types/Components.types';
import { FormWrapper, FormHeader, Title, Subtitle, FormBodyWrapper, FormBody, FormBodyContent, StyledForm } from './Index.styles';

const Form: FC<IDefaultProps> = () => {
    return (
        <FormWrapper>
            <FormHeader>
                <Title>Business Intelligence</Title>
                <Subtitle>Car purchase prediction</Subtitle>
            </FormHeader>
            <FormBodyWrapper>
                <FormBody>
                    <FormBodyContent>
                        <Formik
                            // initialValues={}
                            // validate={}
                            onSubmit={(values, { setSubmitting }) => {
                                console.log(values)
                                setSubmitting(false);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <StyledForm>
                                    <button type="submit" disabled={isSubmitting}>Submit</button>
                                </StyledForm>
                            )}
                        </Formik>
                    </FormBodyContent>
                </FormBody>
            </FormBodyWrapper>
        </FormWrapper>
    )
}

export { Form };