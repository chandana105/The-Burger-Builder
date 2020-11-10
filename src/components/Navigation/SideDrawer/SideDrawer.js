import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/BackDrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      {/* // now hwew i had dsigned my sdiedrawe, backdrop to be outside */}
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          {/* here we havenaivgatio items , so otensure whenre we clik  a navitem we essentialy closethatdrawer  */}
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;

// toh props.clsoed (jo ki humein backdrop mein hum pass krrhe) implement krna hai inthissidedrawecomp , now to do that we couldsimply liten for a clcik anywhere on the siddrawr , that would notmeanthatcliking on lonks would closeit  , weoculdalso gotohere naviitems nd trytoregistred onclik litenr there, so ona clck ontheisredraerinfgerenrl , letstrytoreachooutto props.closed whoch so agr ab hum kahin pr hum clik krein sdrwweke itll clsoe ie links bhi usspr hi hain as navitems comp uss div kenadarhain toh itgetscloses

// lets now also have bacdrawer behind the sidedrwer, aso waned t oopne nad clse dynamcly , well jsut aded in modal thebackdrop vaise hi in sidedrawe comp too asit belongs t othe sidedrawer , so outside proble as we re havign adjacent jsx elets toh so aux
// now if sene backdrop has show prop to be true, so jius as it is as show is boolaean, sidedra shoukd be show when menu is clked , close once click backdrp, for that we need clciked list , actuly we have n backdrop clcik list whoch can be fire whenver we clck, cliked we can fire any metohd we want to fire, so now we want the method in thesidrwet toh pehle modal mei nhat bakop toh , humein sidedrawer kobhi cna convert to stateful as metohd as a props toh yhaan se h bhejge , so handle theclik here with a metohd, with a stae whcih we ca nswitch fro show to not , but we ll also triger the sidedrawet from the toolbar coz therell ahve menu btn : sothere ll need to make a conection from totolbar to sdierawer , nd we ahve tht connection already tis the layout comp

// sp now it  closes thebakcdirp but not the sidedrar toh usme we are haing ope nnd close prorty , so inthe sidedrawer we ll do this thing befre i retrn the jsx code, by defl sidedra dn close clas atched , nd it should be open when opern pros true
