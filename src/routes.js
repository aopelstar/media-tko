import React from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Packages from './components/packages/Packages';
import Splash from './components/splash/Splash';
import Thanks from './components/thanks/Thanks';
import Work from './components/work/Work';

export default (
    <HashRouter>
        <Switch>
            <Route exact path ='/' component = { Splash } />
            <Route path ='/home' component = { Home } />
            <Route path ='/about' component = { About } />
            <Route path ='/packages' component = { Packages } />
            <Route path ='/work' component = { Work } />
            <Route path ='/contact' component = { Contact } />
            <Route path ='/thanks' component = { Thanks } />
        </Switch>
    </HashRouter>

)
