import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';

class App extends Component {
  render(){
  return <div>
        <SearchBar />
         </div>
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
