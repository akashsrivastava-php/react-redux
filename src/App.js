import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { updateUser } from './actions/user-action';

class App extends Component {
  constructor(props){
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);

  }

  onUpdateUser(event){

    this.props.onUpdateUser(event.target.value);

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
          <input onChange={this.onUpdateUser} />{this.props.user}
        </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state =>({

  product: state.product,
  user: state.user

});

const mapActionsToProps = {

  onUpdateUser : updateUser

}

export default connect(mapStateToProps,mapActionsToProps)(App);
