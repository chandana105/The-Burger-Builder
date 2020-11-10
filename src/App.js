import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

const Checkout = React.lazy(() => import('./containers/Checkout/Checkout'));
const Orders = React.lazy(() => import('./containers/Orders/Orders'));
const Auth = React.lazy(() => import('./containers/Auth/Auth'));

class App extends Component {
  componentDidMount(props) {
    this.props.onTryAutoSignup();
  }

  render() {
    // for unauthenticated users
    let routes = (
      <Switch>
        <Route
          path='/auth'
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <Auth />
            </Suspense>
          )}
        />
        <Route path='/' exact component={BurgerBuilder} />
        <Redirect to='/' />
      </Switch>
    );

    // for authentcited users
    if (this.props.isAuthenticated) {
      routes = (
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              path='/checkout'
              component={Checkout}
              // render={() => (
              //   // <Suspense fallback={<div>Loading...</div>}>
              //   <Checkout />
              //   // </Suspense>
              // )}
            />
            <Route
              path='/orders'
              // component={Orders}
              render={() => (
                // <Suspense fallback={<div>Loading...</div>}>
                <Orders />
                // </Suspense>
              )}
            />
            <Route path='/logout' component={Logout} />
            <Route
              path='/auth'
              // component={Auth}
              render={() => (
                // <Suspense fallback={<div>Loading...</div>}>
                <Auth />
                // </Suspense>
              )}
            />{' '}
            <Route path='/' exact component={BurgerBuilder} />
            <Redirect to='/' />
          </Switch>
        </Suspense>
      );
    }
    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

