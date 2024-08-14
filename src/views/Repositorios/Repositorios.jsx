import { Container, Grid, TablePagination, Typography } from '@mui/material';
import { SearchField } from '../../components/SearchField';
import { useRepositorios } from './useRepositorios';
import { TableRepositories } from '../../components/TableRepositories';

export const Repositorios = () => {
  const {
    search,
    setSearch,
    repositorios,
    perPage,
    setPerPage,
    page,
    setPage,
    totalRepositorios
  } = useRepositorios()

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant='h4' color={"primary"}>
            Repositorios
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} >
          <SearchField value={search} handleValue={setSearch} />
        </Grid>

        <Grid item xs={12} >
          <TableRepositories rows={repositorios} />
        </Grid>

        <Grid item xs={12} >
          <TablePagination
            component="div"
            count={totalRepositorios}
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
