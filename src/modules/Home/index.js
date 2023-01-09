import { WhatsApp } from '@mui/icons-material';
import { Fab } from '@mui/material';
import React from 'react'
import {fallback} from '../../assets/images'
import BackToTop from './BackToTop';
import Slogan from './Slogan';

const Home = () => {
  return (
    <BackToTop>
      <Fab size="small" style={{float :'right', bottom:'70px', right:'20px',position:'fixed'}}>
          <WhatsApp />
        </Fab>
     <Slogan/>
     <Slogan/>
    </BackToTop>
  );
};

export default Home;
