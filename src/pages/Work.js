import React from "react";
// import Weather from "../assets/projects/weather.jpg";
// import Catwebsite from "../assets/projects/catwebsite.jpg";
// import Musicapp from "../assets/projects/musicapp.png";
// import Skynetwatch from "../assets/projects/SkynetWatch.jpg";
import Stack from "react-bootstrap/Stack";

const Work = () => {
  return (
    <div>
      <h3
        className="text-card animate__animated  animate__slideInLeft"
        id="work"
      >
        My Most Recent Work
      </h3>
      <Stack className="work-card" gap={4}>
        <a
          className="box"
          href="https://www.shecodes.io/workshops/shecodes-plus-d06049c3-f016-47b1-8d88-446d4f80d767/projects/676656"
        >
          <h4>Weather App</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </a>
        <a
          className="box"
          href="https://www.shecodes.io/workshops/shecodes-basics-57b3ec84-8a72-4cf7-ad84-a02f519069f0/projects/534115"
        >
          <h4>Cat Website</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </a>
        <a className="box" href="https://jlara65.github.io/music-player/">
          <h4>Music Player</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </a>
        <a className="box" href="https://polar-atoll-04436.herokuapp.com/">
          <h4>Skynet Watch</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </a>
      </Stack>
    </div>
  );
};

export default Work;
