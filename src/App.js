import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Navbar from './components/layout/Navbar'
import Dashboard from './screens/Dashboard'

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <div className="flex-layout">
            <div className="top">
              {/* <Navbar /> */}
            </div>
            <div className="body">
              <Switch>
                <Route exact path="/" component={Dashboard} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
