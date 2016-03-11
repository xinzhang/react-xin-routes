import React from 'react'
import {render} from 'react-dom'

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import Layout from './layout/layout.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Inbox from './pages/inbox.jsx'

import '../css/bootstrap.min.css';

var rootInstance = render((
	<Router history={hashHistory}>
	    <Route path="/" component={Layout}>
	      <IndexRoute component={Home} />
	      <Route path="about" component={About} />
	      <Route path="inbox" component={Inbox} />
	    </Route>
    </Router>
), document.getElementById('main'));
