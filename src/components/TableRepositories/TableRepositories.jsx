import { Visibility } from '@mui/icons-material';
import { TableContainer, Table, TableHead, TableBody, TableCell, Paper, TableRow, Rating, Typography, Button } from '@mui/material';
import { useModal } from '../Modal';
import { CardUser } from '../CardUser';

export const TableRepositories = ({ rows }) => {
  const { handleOpenModal } = useModal();

  const viewInfoUser = (user, score) => {
    handleOpenModal({
      body: (
        <CardUser name={user.login} avatar={user.avatar_url} score={score} />
      )
    })
  }

  return (
    <TableContainer component={Paper} variant='outlined'>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align='center'>Usuario</TableCell>
            <TableCell align='center'>Watchers</TableCell>
            <TableCell align='center'>Language</TableCell>
            <TableCell align='center'>Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id + "-R"}
              sx={{ borderBottom: '2px solid #e5e5e5', '&:last-child td, &:last-child th': { borderBottom: 'none' } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align='center'>
                <Button
                  variant='text'
                  sx={{ textDecoration: 'underline' }}
                  onClick={() => { viewInfoUser(row.owner, row.score) }}
                >
                  {row.owner.login}
                </Button>
              </TableCell>
              <TableCell>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    flex: 1,
                  }}
                >
                  <Visibility />{row.watchers}
                </Typography>
              </TableCell>
              <TableCell align='center'>
                {row.language}
              </TableCell>
              <TableCell align='center'>
                <Rating name="read-only" value={row.score} readOnly />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}