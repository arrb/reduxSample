import React, { Component, PropTypes } from 'react';
import EmployeeUI from '../../components/employeeUI/EmployeeUI';

class App extends Component {

  render() {
    return (


      <div className="appContent">
      {this.props.children}
      </div>

    );
  }
}
export default App
