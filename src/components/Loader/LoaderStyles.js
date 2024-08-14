import styled from "@emotion/styled";
import { Backdrop } from '@mui/material';

const BackdropStyled = styled(Backdrop)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.common.loaderBackground,
  opacity: '0.95 !important',
  zIndex: theme.zIndex.drawer + 2
}));


export { BackdropStyled };