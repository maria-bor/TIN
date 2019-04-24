import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Form from './Form/Form';
import Label from './Task1/Label';
import Text from './Task1/Text';
import MainNavigation from './components/Navigation/MainNavigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MainNavigation />
            <main className="main-content">
              <Switch>
                <Redirect from="/" to="/task1" exact />
                <Route path="/task1" component={() => <Label name="Twoje imię: " value="Maria"/>} />
                <Route path="/task2" component={() => <Text name="Hello world!"/>} />
                <Route path="/task3" component={Form} />
              </Switch>
            </main>
          </React.Fragment>
        </BrowserRouter>
      </div >
    );
  }
}

export default App;
