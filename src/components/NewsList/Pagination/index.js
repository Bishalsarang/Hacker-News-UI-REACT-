import React, { Component } from 'react';

import './style.css';

class Pagination extends Component {
  render() {
    return (
      <div className="Pagination">
        <button onClick={this.props.handlePrevClick}>
          <i class="fas fa-chevron-circle-left fa-2x"></i>
        </button>
        {<h3 className="currentPage">Page: {this.props.currentPageNumber}</h3>}
        <button onClick={this.props.handleNextClick}>
          <i class="fas fa-chevron-circle-right fa-2x"></i>
        </button>
      </div>
    );
  }
}

export default Pagination;
