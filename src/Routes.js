import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './views/Home';
import Work from './views/Work';
import Life from './views/Life';
import NoMatch from './views/NoMatch';

import Header from './components/Header';
import Footer from './components/Footer';


export const Routes = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/Home' component={Home} />
                <Route exact path='/'>
                    <Redirect to='/Home' />
                </Route>
                <Route exact path='/Work' component={Work} />
                <Route exact path='/Life' component={Life} />
                <Route component={NoMatch} />
            </Switch>
            <Footer />
        </div>
    );
};