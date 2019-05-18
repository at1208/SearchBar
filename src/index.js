import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import SearchBar from './components/searchBar';

class App extends Component {
    state={ image: [] }

     onSearch = (term)=> {
      axios.get('https://api.unsplash.com/search/photos',{
        params: { query: term },
        headers: {
          Authorization: 'Client-ID aeed5148324b729f9df364b330197242dfc627070ded68da69cabb1f0eb317c4'}
      })
      .then((response) => this.setState({ image: response.data  }))
      .catch((err) => console.log(err))
    console.log(this.state.image)
  }



  render(){
  return <div>
        <SearchBar onEnter={this.onSearch} />

         </div>
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
