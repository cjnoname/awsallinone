import * as React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import OAuth from './components/OAuth';
import ViewDetails from './components/ViewDetails';

export const routes = <HashRouter><Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/viewDetails' component={ ViewDetails } />
    <Route path='/oauth' component={ OAuth } />
</Layout></HashRouter>;
