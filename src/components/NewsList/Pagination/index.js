import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    return (
      <div className="Pagination">
        <button onClick={this.props.handlePrevClick}>Prev</button>
        <button onClick={this.props.handleNextClick}>Next</button>
      </div>
    );
  }
}

export default Pagination;
