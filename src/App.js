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
import Notes from './pages/notes'
import SubNotes from './pages/sub.notes'

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/notes" component={Notes} /> 
          <Route path="/notes/:level/:root" component={SubNotes} />
        </Switch>

      </Router>

    </div>
  );
}

export default App;
