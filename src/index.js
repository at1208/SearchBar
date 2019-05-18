import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';

class App extends Component {

 onSearch =(term)=> {
console.log(term)
  }
  render(){
  return <div>
        <SearchBar onEnter={this.onSearch} />
         </div>
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
