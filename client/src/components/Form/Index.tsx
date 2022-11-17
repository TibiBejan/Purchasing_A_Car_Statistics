import React from 'react';
import { FormBody, FormContent, FormHeader, FormWrapper } from './Index.style';
import { defaultProps } from './Index.types';

const Form:React.FC<defaultProps> = () => {

    // Filter by
    /*
        1. Maker
        2. Model

        3. Year

        4. Price - start / end

        5. Fuel Type
        6. Engine Size


        
        10. Gearbox
        11. Engine Power

        9. Bodytype
        13. Doors Number
        14. Seats Number
        8. Color

        7. Miles
        12. Anual Tax
    */

    return (
        <FormWrapper>
            <FormContent method="POST">
                <FormHeader>
                    header
                </FormHeader>
                <FormBody>
                    form body
                </FormBody>
            </FormContent>
        </FormWrapper>
    )
}

export { Form };


