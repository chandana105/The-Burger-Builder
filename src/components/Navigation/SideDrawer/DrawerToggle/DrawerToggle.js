import React from 'react';

import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => (
  <div className={classes.DrawerToggle}
  onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;

// now to ad clcklist to this div her, now each div inside it ll create div s to create hamburger icons