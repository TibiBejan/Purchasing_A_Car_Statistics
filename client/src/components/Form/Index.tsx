import { ErrorMessage, Field, Formik } from 'formik';
import { FC } from 'react';
import { IDefaultProps } from '../../types/Components.types';
import { CheckboxGroup } from './CheckboxGroup/Index';
import { Dropdown } from './Dropdown/Index';
import { FormBody, FormBodyContent, FormBodyWrapper, FormFieldLabel, FormHeader, FormWrapper, MultipleRowsGroup, RowGroup, StyledForm, SubmitButton, Subtitle, Title } from './Index.styles';

const Form: FC<IDefaultProps> = () => {

    // Define types for initial values
    type BodyTypes = "MPV" | "Hatchback" | "Coupe" | "Convertible" | "SUV" | "Saloon" | "Estate"

    interface IFormValues {
        bodyTypesID: BodyTypes[],
        maker: string,
        model: string,
        year: {
            yearFrom: number,
            yearTo: number,
        },
        price: {
            priceFrom: number,
            priceTo: number,
        },
        mileage: {
            mileageFrom: number,
            mileageTo: number,
        }
        color: string,
        fuel: string,
        gearbox: string,
        engineSize: {
            engineSizeFrom: number,
            engineSizeTo: number,
        },
        enginePower: {
            enginePowerFrom: number,
            enginePowerTo: number,
        }
    }

    const bodyTypesArr = [
        {
            id: "MPV",
            name: "MPV"
        },
        {
            id: "Hatchback",
            name: "Hatchback"
        },
        {
            id: "Coupe",
            name: "Coupe"
        },
        {
            id: "Convertible",
            name: "Convertible"
        },
        {
            id: "SUV",
            name: "SUV"
        },
        {
            id: "Saloon",
            name: "Saloon"
        },
        {
            id: "Estate",
            name: "Estate"
        },
    ]

    return (
        <FormWrapper>
            <FormHeader>
                <Title>Business Intelligence</Title>
                <Subtitle>Car purchase prediction</Subtitle>
            </FormHeader>
            <FormBodyWrapper>
                <FormBody>
                    <FormBodyContent>
                        <Formik<IFormValues>
                            enableReinitialize
                            initialValues={{ 
                                bodyTypesID: [],
                                maker: "",
                                model: "",
                                year: {
                                    yearFrom: 1998,
                                    yearTo: 2021
                                },
                                price: {
                                    priceFrom: 0,
                                    priceTo: 0,
                                },
                                mileage: {
                                    mileageFrom: 0,
                                    mileageTo: 0,
                                },
                                color: "Blue",
                                fuel: "Petrol",
                                gearbox: "Manual",
                                engineSize: {
                                    engineSizeFrom: 0,
                                    engineSizeTo: 0,
                                },
                                enginePower: {
                                    enginePowerFrom: 0,
                                    enginePowerTo: 0,
                                }
                            }}
                            // validate={}
                            onSubmit={(values, { setSubmitting }) => {
                                console.log(values)
                                setSubmitting(false);
                            }}
                        >
                            {({ isSubmitting, values, setFieldValue }) => (
                                <StyledForm>
                                    <MultipleRowsGroup>
                                        <CheckboxGroup 
                                            fieldName="bodyTypesID"
                                            formValues={values.bodyTypesID}
                                            fields={bodyTypesArr}
                                        />
                                    </MultipleRowsGroup>
                                    <MultipleRowsGroup>
                                        <Dropdown
                                            title="Automotive Maker"
                                            fieldName="maker"
                                            placeholder="Choose maker"
                                        />
                                        <Dropdown
                                            title="Automotive Model"
                                            fieldName="model"
                                            placeholder="Choose model"
                                        />
                                    </MultipleRowsGroup>
                                    <MultipleRowsGroup>
                                        <RowGroup>
                                            <FormFieldLabel>Year of Production</FormFieldLabel>
                                            <Dropdown
                                                fieldName="yearFrom"
                                                placeholder="From"
                                            />
                                            <Dropdown
                                                fieldName="yearTo"
                                                placeholder="To"
                                            />
                                        </RowGroup>
                                        <RowGroup>
                                            <FormFieldLabel>Price</FormFieldLabel>
                                            <Dropdown
                                                fieldName="priceFrom"
                                                placeholder="From"
                                            />
                                            <Dropdown
                                                fieldName="priceTo"
                                                placeholder="To"
                                            />
                                        </RowGroup>
                                        <RowGroup>
                                            <FormFieldLabel>Mileage</FormFieldLabel>
                                            <Dropdown
                                                fieldName="mileageFrom"
                                                placeholder="From"
                                            />
                                            <Dropdown
                                                fieldName="mileageTo"
                                                placeholder="To"
                                            />
                                        </RowGroup>
                                        <Dropdown
                                            title="Vehicle Color"
                                            fieldName="color"
                                            placeholder="Choose prefered color"
                                        />
                                    </MultipleRowsGroup>
                                    <MultipleRowsGroup>
                                        <Dropdown
                                            title="Vehicle Fuel Type"
                                            fieldName="fuel"
                                            placeholder="Choose fuel type"
                                        />
                                        <Dropdown
                                            title="Vehicle Gearbox"
                                            fieldName="gearbox"
                                            placeholder="Choose gearbox type"
                                        />
                                    </MultipleRowsGroup>
                                    <MultipleRowsGroup>
                                        <RowGroup>
                                            <FormFieldLabel>Engine Size</FormFieldLabel>
                                            <Dropdown
                                                fieldName="engineSizeFrom"
                                                placeholder="From"
                                            />
                                            <Dropdown
                                                fieldName="engineSizeTo"
                                                placeholder="To"
                                            />
                                        </RowGroup>
                                        <RowGroup>
                                            <FormFieldLabel>Engine Power</FormFieldLabel>
                                            <Dropdown
                                                fieldName="enginePowerFrom"
                                                placeholder="From"
                                            />
                                            <Dropdown
                                                fieldName="enginePowerTo"
                                                placeholder="To"
                                            />
                                        </RowGroup>
                                    </MultipleRowsGroup>
                                    <SubmitButton 
                                        type="submit" 
                                        disabled={isSubmitting}
                                    >
                                        Submit
                                    </SubmitButton>
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

