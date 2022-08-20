import React from 'react';
import Navbar from '../component/Navbar';
import "./Home.css";
import Performance from '../component/Performance';
import Leave from '../component/Leave';
import Sidebar from '../component/Sidebar';

const Home = () => {
  return (
    <div>
        <div className='sidnav'>
          <Sidebar />
        <Navbar />
        </div>
    </div>
  )
}

export default Home;