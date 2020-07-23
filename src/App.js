import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import {connect} from 'react-redux'

// importing components
import Navbar from './components/Navbar/navbar'

// importing Pages 
import Index from './pages/index'
import Auth from './pages/auth'
import Notes from './pages/notes'
import SubNotes from './pages/sub.notes'

import {
  Backdrop,
  makeStyles,
  CircularProgress
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function App(props) {
  const classes = useStyles()
  return (
    <div>
      <Backdrop 
      className={classes.backdrop} 
      open={props.isLoading}
      >
        <CircularProgress color="inherit"/>
      </Backdrop>
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

const mapStateToProps = state => {
  return {
    isLoading: state.ui.isLoading
  }
}

export default connect(mapStateToProps)(App);
