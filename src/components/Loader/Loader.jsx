import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useLoader } from './hooks/useLoader';
import { BackdropStyled } from './LoaderStyles';

const Loader = (props) => {
  const { children, topText, bottomText } = props;
  const { show, texts } = useLoader();

  const textRender = (text) =>
    text ? (
      <Box m={4}>
        <Typography variant="h5">{text}</Typography>
      </Box>
    ) : null;

  return (
    <BackdropStyled open={show || false}>
      {children ? (
        children
      ) : (
        <>
          {textRender(topText || texts.topText)}
          <CircularProgress color="inherit" size={56} />
          {textRender(bottomText || texts.bottomText)}
        </>
      )}
    </BackdropStyled>
  );
};

export { Loader };
