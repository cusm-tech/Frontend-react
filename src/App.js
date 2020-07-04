import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// importing components
import Navbar from './components/Navbar/navbar'

// importing Pages 
import Index from './pages/index'
import Auth from './pages/auth'

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/auth" component={Auth} />
        </Switch>

      </Router>

    </div>
  );
}

export default App;
