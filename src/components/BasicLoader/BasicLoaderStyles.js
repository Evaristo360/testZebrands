import styled from "@emotion/styled";
import { Typography } from '@mui/material';

const Container = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

const BottomText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  textTransform: 'uppercase',
  letterSpacing: '0.2625rem',
  fontWeight: 'bold',
  color: theme.palette.common.white
}));


export { BottomText, Container };