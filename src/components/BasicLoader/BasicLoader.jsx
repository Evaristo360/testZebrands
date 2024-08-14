import React from 'react';
import Lottie from 'react-lottie-player';
import { Box } from '@mui/material';
import animationLoader from '../../assets/animations/loader.json';
import { BottomText, Container } from './BasicLoaderStyles';

const BasicLoader = () => {
  return (
    <Container>
      <Lottie
        loop
        play
        animationData={animationLoader}
        style={{ width: 450 }}
        speed={1.5}
      />

      <Box mt={0}>
        <BottomText variant="h6">
          Cargando...
        </BottomText>
      </Box>
    </Container>
  );
};

export { BasicLoader };
