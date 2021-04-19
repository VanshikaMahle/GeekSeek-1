import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-froms/CreateProfile';
import AddExperience from './components/profile-froms/AddExperience';
import AddEducation from './components/profile-froms/AddEducation';
import EditProfile from './components/profile-froms/EditProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import Profiles from './components/profiles/profiles'
import Profile from './components/profile/Profile'
// import Posts from './components/posts/Posts'
//import Post from './components/post/Post'
import './App.css';
//redux
import { Provider } from 'react-redux';
import store from './store';

import { loadUser } from './actions/auth';
import setAuthToken from './utils/seAuthToken'

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []); // adding empty bracket to only run once not in loop
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:id" component={Profile} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/create-profile" component={CreateProfile} />
              <PrivateRoute exact path="/edit-profile" component={EditProfile} />
              <PrivateRoute exact path="/add-experience" component={AddExperience} />
              <PrivateRoute exact path="/add-education" component={AddEducation} />
              {/* <PrivateRoute exact path="/posts" component={Posts} /> */}
              {/* // <PrivateRoute exact path="/post/:id" component={Post} /> */}
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  )
};
export default App;
