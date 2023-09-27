import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function About() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h1 className="text-center">About Us</h1>
          <p>
            
A React developer is a professional who specializes in using the React JavaScript library to build user interfaces and web applications. React is a popular and widely adopted front-end library developed by Facebook that allows developers to create interactive and dynamic user interfaces with ease.
          </p>
         
          <div className="card p-4">
  <div className="card-header">
   Follow Me
  </div>
  <div className="card-body">
    <h5 className="card-title">Special  treatment</h5>
    <p className="card-text">I am fond of Web development and I have at least learnt something, I think… 🤷‍♂️

I am fluent in classics like Javascript, HTML and CSS.

My field of Interest's are building new  Web Technologies and Products and also in areas related to React js and Next JS development.

Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React Native and TypeScript</p>
    <button href="https://rajmaurya95.github.io/Portfolio/" className="btn btn-primary mx-2  ">Portfolio</button>
    <button href="https://github.com/rajmaurya95" className="btn btn-primary mx-2 ">Github</button>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}

export default About;

