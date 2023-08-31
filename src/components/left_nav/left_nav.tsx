import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { CssBaseline, Grid, Container } from '@mui/material';
import TemporaryDrawer from './drawer';
import './left_nav.scss';
import ButtonList from './buttons';
import imagePath from '../../Image/image_14.png'
import logo7 from '../../Image/logo7.png'

const theme = createTheme();

const LeftNav: React.FC = () => {
  
  const [shouldDisplayDrawer, setShouldDisplayDrawer] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setShouldDisplayDrawer(true);
      } else {
        setShouldDisplayDrawer(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Grid container spacing={0} justifyContent={"start"}>
        <Grid item xs={12} sm={12}>
          {shouldDisplayDrawer ? (
            <TemporaryDrawer  /> 
          ) : (
            <Container className="my-container"  >
              <div className="block">
          <img src={imagePath} alt="Description" />
          <div className="line"></div>
          <div className="list">
            <ButtonList />
          </div>
          <div className="line2"></div>
          <div className="logo-container">
            <span className="content">Powered by </span>
            <img className="logo" src={logo7} alt="Description" />
          </div>
        </div>
            </Container>
          )}
        </Grid>
        
      </Grid>
    </ThemeProvider>
  );
};

export default LeftNav;
