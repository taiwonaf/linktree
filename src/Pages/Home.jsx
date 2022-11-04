import React from 'react';
import Profile from '../components/Profile';
import Links from '../components/Links';
import Socials from '../components/Socials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Profile />
        <Links />
        <Socials />
        {/* <Footer /> */}
    </div>
  )
}

export default Home