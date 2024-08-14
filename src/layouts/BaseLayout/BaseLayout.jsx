import React from 'react';
import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';
import { BasicLoader } from '../../components/BasicLoader';
import { Modal } from '../../components/Modal';
import { Container, AppBarSpacer } from './BaseLayoutStyles'
const BaseLayout = ({ children }) => {
  return (
    <Container>
      <Loader>
        <BasicLoader />
      </Loader>
      <Modal />
      <Header />
      <div>
        <AppBarSpacer />
        {children}
      </div>
    </Container>
  );
}

export { BaseLayout };
