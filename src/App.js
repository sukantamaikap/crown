import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';
import HomrePage from './pages/homepage/homepage.component';
import HatsPage from './pages/hatpage/hatpage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector';
import Checkout from './pages/checkout/checkout.component';

class App extends React.Component {
  
  componentDidMount() {
    const { setCurrentUser } = this.props;
    auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  unsubscribeFromAuth = null

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component= {HomrePage} />
            <Route path='/shop' component = {ShopPage} />
            <Route exact 
                   path='/signin' 
                   render={() => 
                     this.props.currentUser ? 
                     (<Redirect to='/' />) 
                     : 
                     (<SignInAndSignUpPage />)}
                     />
            <Route path='/shop/hats' component = {HatsPage} />
            <Route exact path='/checkout' component = {CheckoutPage} />
          </Switch>
        </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
