import React from "react";
// import Weather from "../assets/projects/weather.jpg";
// import Catwebsite from "../assets/projects/catwebsite.jpg";
// import Musicapp from "../assets/projects/musicapp.png";
// import Skynetwatch from "../assets/projects/SkynetWatch.jpg";
import Stack from "react-bootstrap/Stack";

const Work = () => {
  return (
    <>
      <h3 id="work">My Most Recent Work</h3>
      <Stack className="m-3" gap={4}>
        <a href="https://www.shecodes.io/workshops/shecodes-plus-d06049c3-f016-47b1-8d88-446d4f80d767/projects/676656">
          <div className="bg-light border p-3">Weather App</div>
        </a>
        <a href="https://www.shecodes.io/workshops/shecodes-basics-57b3ec84-8a72-4cf7-ad84-a02f519069f0/projects/534115">
          <div className="bg-light border p-3">Cat Website</div>
        </a>
        <a href="https://jlara65.github.io/music-player/">
          <div className="bg-light border p-3">Music Player</div>
        </a>
        <a href="https://polar-atoll-04436.herokuapp.com/">
          <div className="bg-light border p-3">Skynet Watch</div>
        </a>
      </Stack>
    </>
  );
};

export default Work;
