import React, { Component } from 'react';
import { connect } from "react-redux";
import { Main } from '../components/Main';
import { User } from '../components/User';

class App extends Component {
    render() {
    let { user, setName } = this.props; // Destructuring ES6
    return (
      <div className="App container">
        <Main changeUsername={() => setName("Anna")} />
        <User username={ user.name } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user, //The name from your reducer here (user)
        math: state.math
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            })
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);