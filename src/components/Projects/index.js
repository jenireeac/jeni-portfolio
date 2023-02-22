import React from "react";
import Weather from "../../assets/projects/weatherApp.jpg";
import Catwebsite from "../../assets/projects/catwebsite.jpg";
import MusicApp from "../../assets/projects/MusicApp.png";
import Recipes from "../../assets/projects/recipes.png";
import Stack from "react-bootstrap/Stack";

const Work = () => {
  return (
    <div>
      <h3
        className=" m-5 p-4 text-card animate__animated  animate__slideInLeft"
        id="work"
      >
        My Most Recent Work
      </h3>
      <Stack className="work-card" gap={3}>

        {/* // 1st project  */}
        <a
          className="box"
          href="https://www.shecodes.io/workshops/shecodes-plus-d06049c3-f016-47b1-8d88-446d4f80d767/projects/676656"
          target="blank"
        >
          <h4>Weather App</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <img src={Weather} className="rounded mx-auto d-block" alt="" />
        </a>

        {/* // 2nd project  */}
        <a
          className="box"
          href="https://www.shecodes.io/workshops/shecodes-basics-57b3ec84-8a72-4cf7-ad84-a02f519069f0/projects/534115"
          target="blank"
        >
          <h4>Cat Website</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          <img src={Catwebsite} className="rounded mx-auto d-block" alt="" />
        </a>

        {/* // 3rd project  */}
        <a
          className="box"
          href="https://jlara65.github.io/music-player/"
          target="blank"
        >
          <h4>Music Player</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </p>
          <img src={MusicApp} className="rounded mx-auto d-block" alt="" />
        </a>

        {/* // 4th project  */}
        <a
          className="box"
          href="https://polar-atoll-04436.herokuapp.com/"
          target="blank"
        >
          <h4>What is the recipes</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </p>
          <img src={Recipes} className="rounded mx-auto d-block" alt="" />
        </a>
      </Stack>
    </div>
  );
};

export default Work;
