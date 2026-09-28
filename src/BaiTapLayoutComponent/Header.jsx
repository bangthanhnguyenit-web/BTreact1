import React from 'react';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5">
      <div className="container-fluid px-0">
        <a className="navbar-brand" href="#!">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#!">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}