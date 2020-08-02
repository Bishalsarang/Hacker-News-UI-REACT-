import React, { Component } from 'react';

import './style.css';

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: this.props.isVisible,
    };
  }
  handleModalClick = e => {
    if (e.target.className.includes('Modal')) {
      this.setState({
        isVisible: false,
      });
      this.props.handleModalClick();
    }
  };

  render() {
    const { url, title } = this.props;
    return (
      <div
        className={`Modal ${this.state.isVisible ? '' : 'hide'}`}
        onClick={e => this.handleModalClick(e)}
      >
        <div className="Modal__content">
          <div className="Modal__header">
            <a href={url}>
              <h2 className="header">{title}</h2>
            </a>
          </div>

          <div className="Modal__body">{this.props.body}</div>
        </div>
      </div>
    );
  }
}
