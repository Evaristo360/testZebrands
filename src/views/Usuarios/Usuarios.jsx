import { Container, Grid, TablePagination, Typography } from '@mui/material';
import { SearchField } from '../../components/SearchField';
import { useUsuarios } from './useUsuarios';
import { CardUser } from '../../components/CardUser';

export const Usuarios = () => {
  const {
    search,
    setSearch,
    usuarios,
    perPage,
    setPerPage,
    page,
    setPage,
    totalusuarios
  } = useUsuarios()
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant='h4' color={"primary"}>
            Usuarios
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} >
          <SearchField value={search} handleValue={setSearch} />
        </Grid>

        {usuarios.map((usuario, index) => (
          <CardUser key={"user" + index} name={usuario.login} avatar={usuario.avatar_url} score={usuario.score} />
        ))}
        <Grid item xs={12} >
          <TablePagination
            component="div"
            count={totalusuarios}
            page={page}
            onPageChange={(event, newPage) => { setPage(newPage) }}
            rowsPerPage={perPage}
            onRowsPerPageChange={(event) => {
              setPerPage(parseInt(event.target.value, 10));
              setPage(0);
            }}
          />
        </Grid>

      </Grid>
    </Container>
  )
}
