import React from 'react';

export default function Banner() {
  return (
    <header className="py-5">
      <div className="container px-lg-5">
        <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
          <div className="m-4 m-lg-5">
            <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
            <p className="fs-4">
              Bootstrap utility classes are used to create this jumbotron since the old component has been removed. Components can be used to create custom layouts.
            </p>
            <a className="btn btn-primary btn-lg" href="#!">
              Call to action!
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}