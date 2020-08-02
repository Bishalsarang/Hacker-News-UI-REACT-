import React, { Component } from 'react';

import './style.css';

export default class Modal extends Component {
  render() {
    return (
      <div className="Modal hide">
        <div className="Modal__content">
          <div class="Modal__header">
            <h2>Header</h2>
          </div>

          <div class="Modal__body">{this.props.body}</div>
        </div>
      </div>
    );
  }
}
