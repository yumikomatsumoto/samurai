import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import YouTubeIcon from '@mui/icons-material/YouTube';

interface Thumnail{
  url: string,
  createdAt: string,
  title: string,
}

export default function Home() {
  const thumnails: Thumnail[] = [
    {
      url:"",
      createdAt: "2/15 09:00",
      title:""

    }
  ]
  const card =(
    <Card sx={{ width: 275 }} >
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        <YouTubeIcon/>
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )

  return (
      <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="flex">
          {/* {list.map((x, i) => card)} */}
          {card}
        </div>
      </div>
  </>
  );
}
