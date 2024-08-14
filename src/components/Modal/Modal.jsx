import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent
} from '@mui/material';
import { useModal } from './hooks/useModal';

const Modal = () => {
  const { modalState, handleCloseModal } = useModal();
  const {
    show,
    title,
    body,
    actionButtons,
    isDismissible,
    configProps = {}
  } = modalState;
  const {
    maxWidth,
    className,
    titleClassName,
    showDividers,
    scroll,
    ...otherProps
  } = configProps;

  return (
    <Dialog
      open={show}
      aria-labelledby="app-modal"
      onClose={handleCloseModal}
      maxWidth={maxWidth}
      disableBackdropClick={isDismissible ? undefined : true}
      disableEscapeKeyDown={isDismissible ? undefined : true}
      scroll={scroll}
      sx={{ zIndex: 1201 }}
      {...otherProps}
    >
      {title && <DialogTitle sx={{ zIndex: 1201 }}>{title}</DialogTitle>}

      <DialogContent dividers={showDividers}>{body}</DialogContent>

      {actionButtons && <DialogActions>{actionButtons}</DialogActions>}
    </Dialog>
  );
};

export { Modal };
