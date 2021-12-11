import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Link from 'next/link'


export default function ImgMediaCard(props: any) {

  const id = props.id
  const country = props.info

  const deleteCountry = () => {
    console.log(id)
  }

  var colo:"default" | "success" = "default"
  if (country.visited)
    colo = "success"


  return (
    <Card sx={{ maxWidth: 270 }}>
      <Link href="/jj" >
        <a>
          <CardMedia
            component="img"
            alt="Burundi"
            height="140"
            image={country.flag}
          />
          <CardContent style={{ backgroundColor: "#F8F8F8" }}>
            <Typography gutterBottom variant="h6" component="div">
              {country.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Population: {country.population}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Capital: {country.capital}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Currency: {country.currency}
            </Typography>
          </CardContent>

        </a>
      </Link>

      <CardActions style={{ backgroundColor: "#F8F8F8" }}>
        <IconButton size="small" color={colo}>
          <CheckCircleIcon />
        </IconButton>
        <IconButton onClick={deleteCountry} size="small"  >
          <DeleteForeverIcon />
        </IconButton >
      </CardActions>
    </Card>
  );
}