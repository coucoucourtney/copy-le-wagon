import React from 'react';
import logo from '../../assets/images/logo.svg';
import '../../assets/app.css';


const App = () => {
  // const imageUrl = window.innerWidth >= 650 ? "desktopImage" : "mobileImage";
  return(
    <div>
      <div className="navbar navbar-expand-sm navbar-light navbar-index">
        <img src={logo} className="logo" alt="Courtney's logo" />
      </div>
      <div className="mobileImage banner">
        <div className="container">
          <p>Hi! I'm</p>
          <h1>Courtney Wagner</h1>
          <a className="btn btn-ghost" href="#">About</a>
          <a className="btn btn-ghost" href="#">Code</a>
        </div>
      </div>
      <ul>
        <li>Linked in</li>
        <li>Github</li>
        <li>@</li>
      </ul>
    </div>
  );
}

export default App;
