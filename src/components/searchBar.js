import React, { Component } from 'react';

class SearchBar extends Component {
constructor(props){
  super(props)
  this.state ={
      term: ''}
}
  onFormSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.term)
}

  onInputChange = (e) => {
  this.setState({ term: e.target.value})
  console.log(this.state.term)
  }

  render(){

    return <div >
             <div  style={{marginTop:40,
                           marginLeft:280,
                           marginRight:280,
                           padding: '20px',
                           backgroundColor:'skyblue',
                           border:'1px solid black' }} >

             <form onSubmit={this.onFormSubmit} >

                <label style={{color:'black',
                               fontWeight:'bold' }}> Search Image </label>

                <input
                       value={this.state.term}
                       onChange={this.onInputChange}
                       style={{ border: '1px solid black' }}
                       className="container-fluid" />

            </form>
            </div>
           </div>
  }
}
export default SearchBar;
