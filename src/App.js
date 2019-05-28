import React from 'react';
import Home from './components/Home'
import ColourChange from './components/tasks/task-one/change-colour'
import TaskTwoMain from './components/tasks/task-two/Main'
import Display from './components/tasks/task-two/Display'
import TaskThreeMain from './components/tasks/task-three/Main'
import TaskThreeDisplay from './components/tasks/task-three/DisplayCounter'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar'
import Error404 from './components/Errors/Error404'

class App extends React.Component {
  render() {
    return (
        <div className="container-scroller">
          <Router>
            <NavBar />
            <div className="container mt-5">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/task-one" component={ColourChange} />
                <Route path="/task-two" exact component={TaskTwoMain} />
                <Route path="/task-two/coloring/:colorKey" component={Display}/>
                <Route path="/task-two/coloring" exact component={Display}/>
                <Route path="/task-two/show-text/:text" component={Display}/>
                <Route path="/task-three" exact component={TaskThreeMain} />
                <Route path="/task-three/display-counter/:colorKey" component={TaskThreeDisplay} />
                <Route path="/task-three/set-counter/:newCounter" component={TaskThreeDisplay} />                
                <Route component={Error404} />
              </Switch>
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
