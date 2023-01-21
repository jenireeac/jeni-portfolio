import React from "react";

const Bar = () => {
  return (
    
<>
<nav class="navbar navbar-dark  navbar-expand-lg nav">
  <div class="container-fluid">
    <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon bg-dark"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item ">
          <a class="nav-link fs-5  " href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5 " href="#work">Projects</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link fs-5" href="#contact">Contact </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  )
}

export default Bar;