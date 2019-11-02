import React from 'react';
import Navbar from './../components/Navbar';
import IndexPage from './index';
import AboutPage from './about';
import FaqPage from './faq';
import SigninPage from './signin';
import SignupPage from './signup';
import ForgotpassPage from './forgotpass';
import ChangepassPage from './changepass';
import ListingsPage from './listings';
import ListingsIdPage from './listingsid';
import ConfirmationPage from './confirmation';
import BookingsPage from './bookings';
import ProfilePage from './profile';
import { Switch, Route, Router } from './../util/router.js';
import Divider from './../components/Divider';
import Footer from './../components/Footer';
import './../util/analytics.js';
import { ProvideAuth } from './../util/auth.js';

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <Navbar color="primary" spaced={true} logo="/dropin-logo-white.svg" />

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/faq" component={FaqPage} />

            <Route exact path="/signin" component={SigninPage} />

            <Route exact path="/signup" component={SignupPage} />

            <Route exact path="/forgotpass" component={ForgotpassPage} />

            <Route exact path="/changepass" component={ChangepassPage} />

            <Route exact path="/listings" component={ListingsPage} />

            <Route exact path="/listings/:id" component={ListingsIdPage} />

            <Route exact path="/confirmation" component={ConfirmationPage} />

            <Route exact path="/bookings" component={BookingsPage} />

            <Route exact path="/profile" component={ProfilePage} />

            <Route
              component={({ location }) => {
                return (
                  <div
                    style={{
                      padding: '50px',
                      width: '100%',
                      textAlign: 'center'
                    }}
                  >
                    The page <code>{location.pathname}</code> could not be
                    found.
                  </div>
                );
              }}
            />
          </Switch>

          <Divider color="light" />
          <Footer
            color="white"
            size="medium"
            logo="/dropin-logo.svg"
            description="A short description of what you do here"
            copyright="© Company Name"
          />
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;