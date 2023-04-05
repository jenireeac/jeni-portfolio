import React from "react";
import Weather from "../../assets/projects/weatherApp.jpg";
import Catwebsite from "../../assets/projects/catwebsite.jpg";
import MusicApp from "../../assets/projects/MusicApp.png";
import Recipes from "../../assets/projects/recipes.png";
import Stack from "react-bootstrap/Stack";
import Skynet from "../../assets/projects/skynet.png";

const Work = () => {
  return (
    <>
      <h3
        className=" m-5 p-4 text-card animate__animated  animate__slideInLeft"
        id="work"
      >
        My Most Recent Work
      </h3>
      <Stack className="work-card" gap={3}>
        {/* // 1st project  */}

        <div
          className="box"
          // href="https://blissful-minsky-584121.netlify.app/"
          // target="blank"
        >
          <h4>Weather App</h4>
          <p>
            Use an application programming interface (API) to develop a weather
            app. Included a feature that updates the user on weather changes as
            they travel
          </p>
          <img
            src={Weather}
            className="rounded mx-auto d-block porject-card "
            alt=""
          />
          <div className="button-card">
          <button
              type="button"
              class="btn btn-light"
              data-mdb-ripple-color="dark"
            >
              Project
            </button>
            <button type="button" class="btn btn-dark">
              Github
            </button>
          </div>
        </div>

        {/* // 2nd project  */}
        <div
          className="box"
          // href="https://www.shecodes.io/workshops/shecodes-basics-57b3ec84-8a72-4cf7-ad84-a02f519069f0/projects/534115"
          // target="blank"
        >
          <h4>Cat Website</h4>
          <p>Website for cat lovers </p>
          <img
            src={Catwebsite}
            className="rounded mx-auto d-block porject-card"
            alt=""
          />
          <div className="button-card">
          <button
              type="button"
              class="btn btn-light"
              data-mdb-ripple-color="dark"
            >
              Project
            </button>
            <button type="button" class="btn btn-dark">
              Github
            </button>
          </div>
        </div>

        {/* // 3rd project  */}
        <div
          className="box"
          // href="https://jlara65.github.io/music-player/"
          // target="blank"
        >
          <h4>Music Player</h4>
          <p>
            The demo music player is here to give users change to test out the
            music they love. They can also view musicians' track and Top 5
            Albums on Billboard.
          </p>
          <img
            src={MusicApp}
            className="rounded mx-auto d-block porject-card"
            alt=""
          />
          <div className="button-card">
          <button
              type="button"
              class="btn btn-light"
              data-mdb-ripple-color="dark"
            >
              Project
            </button>
            <button type="button" class="btn btn-dark">
              Github
            </button>
          </div>
        </div>

        {/* // 4th project  */}
        <div
          className="box"
          // href="https://protected-atoll-82762.herokuapp.com/"
          // target="blank"
        >
          <h4>What is the recipes</h4>
          <p>
            Our app allows users to explore new recipes from various cuisines.
            The app will load the top trending video shorts from YouTube based
            on their search. the app is also mobile responsive, which is great
            for quick dinner ideas.
          </p>
          <img
            src={Recipes}
            className="rounded mx-auto d-block porject-card"
            alt=""
          />
          <div className="button-card">
          <button
              type="button"
              class="btn btn-light"
              data-mdb-ripple-color="dark"
            >
              Project
            </button>
            <button type="button" class="btn btn-dark">
              Github
            </button>
          </div>
        </div>
        {/* // 5th project  */}
        <div
          className="box"
          // href="https://polar-atoll-04436.herokuapp.com/"
          // target="blank"
        >
          <h4>Skynet Watch</h4>
          <p>
            Create valuable connections with your neighbors by creating post of
            upcoming events, commenting on other users posts, and interacting
            with others - all in real time.
          </p>
          <img
            src={Skynet}
            className="rounded mx-auto d-block porject-card"
            alt=""
          />
          <div className="button-card">
            <button
              type="button"
              class="btn btn-light"
              data-mdb-ripple-color="dark"
            >
              Project
            </button>
            <button type="button" class="btn btn-dark">
              Github
            </button>
          </div>
        </div>
      </Stack>
    </>
  );
};

export default Work;
