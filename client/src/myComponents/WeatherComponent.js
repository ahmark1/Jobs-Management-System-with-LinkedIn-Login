import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import {useEffect} from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


export default function WeatherComponent(cityName){

    const [mycity,setCity] = useState({location:{name:'',localtime:''},current:{temp_c:'',condition:{text:''}}});
    const [loaded,setLoaded] = useState(false);
    cityName = cityName.cityName;

    useEffect(() => {
    axios.post('http://localhost:8000/api/v1/weather/getcity', {
            cityName,
        }).then((res) => {
            //console.log(cityName);
            //console.log(res.data);
            setCity(res.data);
            setLoaded(true);
        }).catch((error) => {
            console.log(error);
        })
    },[])

    if(loaded){
            return(
                <Container style={{width:'50%', marginBottom:'20px'}}>
        <Card sx={{ minWidth: 275,  backgroundImage: "url(" + mycity.current.condition.icon + ")", backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat', backgroundColor:'lightblue' }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {mycity.location.name}
            </Typography>
            <Typography variant="h5" component="div">
            {mycity.current.temp_c + '°C'}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {mycity.current.condition.text}
            </Typography>
            <Typography variant="body2">
            {mycity.location.region}
              <br />
              {'Last Updated: ' + mycity.current.last_updated}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">View Details</Button>
          </CardActions>
        </Card>
        </Container>
            )
    }
    else{
            return(
                <Container style={{width:'50%'}}>
        <Card sx={{ minWidth: 275, backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat', backgroundColor:'lightblue' }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Loading...
            </Typography>
          </CardContent>
        </Card>
        </Container>
            )
    }
}