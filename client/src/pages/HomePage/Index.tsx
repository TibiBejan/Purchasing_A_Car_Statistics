import React from 'react';
import { Form } from '../../components/Form/Index';
import { defaultProps } from './Index.types';
// import { Header } from '../../common/Header/Index';
// import { Footer } from '../../common/Footer/Index';

const HomePage:React.FC<defaultProps> = () => {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <Form />
      {/* <Footer /> */}
    </React.Fragment>
  )
}

export { HomePage };

