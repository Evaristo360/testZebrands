import styled from "@emotion/styled";


const Container = styled('div')(({ theme }) => ({
  width: '100%',
  height: '1px',
  maxHeight: '100vh'
}));

const AppBarSpacer = styled('div')(({ theme }) => (
  theme.mixins.toolbar
));

export { Container, AppBarSpacer };