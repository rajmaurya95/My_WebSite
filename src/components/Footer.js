import React from 'react';

const Footer = () => {
  return (
    <footer className=" footer bg-dark text-light col align-self-end footer ">
      
      <div className="text-center p-2">
        <p>  All Rights Reserved &copy; {new Date().getFullYear()} My_WebSite..</p>
      </div>
    </footer>
  );
};

export default Footer;
