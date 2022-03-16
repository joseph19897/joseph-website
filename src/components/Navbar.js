import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <nav>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/404">404</Link>
    </li>
  </nav>
  );
}
export default navbar;