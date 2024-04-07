// import React from 'react';
// import '../styles/header.css';

// const NavBar = props =>

// <nav className="navbar navbar-expand-lg navbar-dark ">
//   <a className="navbar-brand" href="/">{/*<img src={servis} alt="" />*/}<div className='navbar-brand-color' ><b>Homely</b></div></a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNavDropdown">
//     <ul className="navbar-nav ml-auto text-uppercase">
//       <li className="nav-item ">
//         <a className="nav-link" href="/">Home</a>
//       </li>
//       <li className="nav-item ">
//         <a className="nav-link" href="/about">Aboutus</a>
//       </li>
//       <li className="nav-item ">
//         <a className="nav-link" href="/contact">ContactUs</a>
//       </li>
      
//       <li className="nav-item">
//         <a className="nav-link" href="/login">Login</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/signup">Sign Up</a>
//       </li>
//     </ul>
//   </div>
// </nav>

// const Header = () => (
//     <header>
//       <NavBar />
//     </header>
// );

// export default Header;

import React from 'react';
import '../styles/header.css';

const NavBar = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark">
    <a className="navbar-brand" href="/">
      {/*<img src={servis} alt="" />*/}
      <div className="navbar-brand-color">
        <b>Homely</b>
      </div>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ml-auto text-uppercase">
        <li className="nav-item ">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="/about">
            Aboutus
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="/contact">
            ContactUs
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/login">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signup">
            Sign Up
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

const Header = () => (
  <header>
    <NavBar />
  </header>
);

export default Header;

