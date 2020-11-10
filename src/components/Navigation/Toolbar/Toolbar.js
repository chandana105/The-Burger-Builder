import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'


const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle  clicked={props.drawerToggleClicked}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      {/* now only smaller devices navigaions itemslll be gone  */}
      <NavigationItems  isAuthenticated={props.isAuth} />
    </nav>
  </header>
);

export default toolbar;



// ttolbar comp min hum navigaioitems lad krrhe 

// noew t oimplemtn some comp to toggle show sdidrawer , now to outsoer menu into tis own comp in sidedrawe as it belongs ther

// CTRL + P TO OPEN ANY FILE,
// CTRL + TAB TO NAVIGATE OPENDE FILES
