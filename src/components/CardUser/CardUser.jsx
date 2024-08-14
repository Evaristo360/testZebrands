import { Grid, Card, CardMedia, CardContent, Typography, Rating } from '@mui/material';

export const CardUser = ({ name, avatar, score }) => {
  return (
    <Grid item xs={4} md={2}>
      <Card sx={{ width: "100%" }} variant='outlined'>
        <CardMedia
          sx={{ minHeight: 140, objectFit: 'fill' }}
          image={avatar}
          title={name + "Avatar"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
            {name || ''}
          </Typography>

          <Rating name="read-only" value={score} readOnly />
        </CardContent>
      </Card>
    </Grid>

  )
}
