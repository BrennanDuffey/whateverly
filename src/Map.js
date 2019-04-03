import React, { Component } from 'react';
import Button from './Button.js';
import Cards from './Cards.js';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <main>
        <picture>
          <img src="" alt="World Map" />
        </picture>
        <Button />
        <Cards searchInput={this.props.searchInput} />
      </main>
    )
  }
}




export default Map;