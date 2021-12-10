import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Image from 'next/image'
import Grid from '@mui/material/Grid';

const useStyles = makeStyles({
  root: {

  },
});
export default function InfoCard(props:any) {

  const classes = useStyles();

  return (
    <Card className={classes.root} sx={{ height: 300, width: 800, display:"flex",flexDirection:"row", marginTop: 10 }} >
      <Grid sx={{ width: 500 }} >
        <Image
          height="480"
          width="500"
          layout="intrinsic"
          alt="burundi"
          src="https://i.pinimg.com/originals/83/14/e5/8314e5daa8bda9bbeb33b363dbc2bc85.jpg"
        />
      </Grid>
      <CardContent sx={{ width: 600 }} >
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
        </Typography>
      </CardContent>
    </Card>
  )
}