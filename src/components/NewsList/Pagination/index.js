import React, { Component } from 'react';

import './style.css';

class Pagination extends Component {
  render() {
    return (
      <div className="Pagination">
        <button onClick={this.props.handlePrevClick}>Prev</button>
        {<h3 className="currentPage">Page: {this.props.currentPageNumber}</h3>}
        <button onClick={this.props.handleNextClick}>Next</button>
      </div>
    );
  }
}

export default Pagination;
