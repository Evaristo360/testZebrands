import { Paper, InputBase, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

export const SearchField = ({ value, handleValue }) => {
  return (
    <Paper
      variant='outlined'
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar"
        inputProps={{ 'aria-label': 'search field' }}
        value={value}
        onChange={(e) => { handleValue(e.target.value) }}
      />
      <IconButton sx={{ p: '10px' }} aria-label="search" disabled>
        <Search />
      </IconButton>
    </Paper>
  )
}
