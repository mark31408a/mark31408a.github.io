import React from 'react';
import { Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home, Introduction, Magictoys } from './pages';

const APP = (props) => {
    return (
        <div className="container">
            <Navbar/>
          {/* The corresponding component will show here if the current URL matches the path */}
          <Route path="/" exact component={Home} />
          <Route path="/Introduction" component={Introduction} />
          <Route path="/Magictoys" component={Magictoys} />
        </div>
    );
}

export default APP;