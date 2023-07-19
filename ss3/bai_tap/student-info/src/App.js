import './App.css';
import Student from './component/Student';
import React from 'react';
class App extends React.Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <Student />
          </tbody>
        </table>
      </div>
    );
  }

}

export default App;
