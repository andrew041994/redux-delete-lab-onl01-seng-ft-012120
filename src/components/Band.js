import React, { Component } from 'react';

class Band extends Component {
  

  render() {
    return(
      <div>
       {this.props.bands.map(band =><div key={band.id}> <li>{band.bandName}</li>
       <button onClick={() => this.props.delete(band.id)}>Delete</button> </div>)}
      </div>
    );
  }
};

export default Band;
