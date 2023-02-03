import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import WeatherComponent from '../myComponents/WeatherComponent';
import NavBar from '../myComponents/NavBar';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function WeatherHome({user, setUser}) {


    let [currentUser,setCurrentUser] = useState({});
    let [currentCities,setCities] = useState([]);
    let [userSet,setUserSet] = useState(false);

    let cityList = [];

    useEffect(() => {
        setCurrentUser(user);
        console.log(currentUser.cities);
    },[])

    
return(
    <div>
        <NavBar/>
    {(currentUser.cities)?.map(function(object, i){
        return <WeatherComponent cityName={object} key={i} />;
    })}
</div>
)
   

}