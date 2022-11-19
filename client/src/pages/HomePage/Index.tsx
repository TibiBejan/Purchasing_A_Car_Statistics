import { FC } from "react";
import { IDefaultProps } from '../../types/Components.types';
import { Form } from '../../components/Form/Index';
import { Charts } from '../../components/Charts/Index';
import { StyledHomepage } from './Index.styles';

const HomePage: FC<IDefaultProps> = () => {
    return (
        <StyledHomepage>
            <Form />
            <Charts />
        </StyledHomepage>
    )
}

export { HomePage };