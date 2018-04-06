import React, { Component } from 'react';
import './Author.css';

class Author extends Component {
  render() {
    return (
      <div class="card">
  <div class="card-header">
    <i class="fa fa-user"></i> Autor
  </div>
  <div class="card-body">
  <div class="row">

      <div class="col-md-3">
      <img class= "img-fluid rounded-circle" src={this.props.image} alt="" width="150px"/>
      </div>

      <div class="col-md-9">
      <h5 class="card-title">{this.props.name}</h5>
      <p class="card-text">{this.props.bio}</p>

      </div>
      
  </div>
  </div>
  </div>
    );
  }
}

export default Author;
