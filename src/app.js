import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';

import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';
import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage, DashboardPage, AthletePage, NotFoundPage } from './pages';

ReactStormpath.init();

ReactDOM.render(
  <Router history={browserHistory}>
    <HomeRoute path='/' component={MasterPage}>
        <IndexRoute component={IndexPage} />        
        <LoginRoute path='/login' component={LoginPage} />
        <Route path='/register' component={RegistrationPage} />
        <AuthenticatedRoute>
          <Route path='/dashboard' component={DashboardPage} />
          <Route path='athlete/:id' component={AthletePage} />
          <HomeRoute path='/profile' component={ProfilePage} />
        </AuthenticatedRoute>
        <Route path="*" component={NotFoundPage}/>
    </HomeRoute>
  </Router>,
  document.getElementById('app-container')
);