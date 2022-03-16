import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Helmet} from "react-helmet";



import Main from './pages/Main'
import NotFound from './pages/NotFound'


import Navbar from './components/Navbar';

const App = () => {
  return (
    
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Joseph B.| Developer</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
  );
}

export default App;