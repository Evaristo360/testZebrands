import React, { useState, useMemo } from 'react';
import { LoaderContext } from './LoaderContext';

const LoaderProvider = (props) => {
  const { children } = props;
  const [show, setShow] = useState(false);
  const [texts, setTexts] = useState({ topText: '', bottomText: '' });

  const handleChangeText = ({ topText = '', bottomText = '' }) =>
    setTexts({ topText, bottomText });

  const contextValue = useMemo(
    () => ({
      show,
      texts,
      handleChangeText,
      handleShowLoader: setShow
    }),
    [show, texts]
  );

  return (
    <LoaderContext.Provider value={contextValue}>
      {children}
    </LoaderContext.Provider>
  );
};

export { LoaderProvider };
