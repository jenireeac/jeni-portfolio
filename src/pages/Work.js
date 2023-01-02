import React from "react";
import Stack from 'react-bootstrap/Stack';
import Weather from "../assets/projects/weather.jpg"
import Catwebsite from "../assets/projects/catwebsite.jpg"
import Musicapp from "../assets/projects/musicapp.png"
import Skynetwatch from "../assets/projects/SkynetWatch.jpg"

const Work = () => {
    return (
          
        <Stack direction="horizontal" gap={3}>
            <img className="img-fluid" src={Weather} alt="Weather App" />
            <img className="img-fluid" src={Catwebsite} alt="Cat Website" />
            <img className="img-fluid" src={Musicapp} alt="Music App" />
            <img className="img-fluid" src={Skynetwatch} alt="Skynet Watch" />
      </Stack>
     
    )
}

export default  Work