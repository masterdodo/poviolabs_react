import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
        <div className="leftSidebar">
          <div className="leftSidebar-item-wrapper">
            <span>
              <img src="img/mm-home-on.svg" alt="Home" />
            </span>
            <span>
              <img src="img/mm-section-off.svg" alt="Section" />
            </span>
            <span>
              <img src="img/mm-create-off.svg" alt="Create" />
            </span>
          </div>
        </div>
      );
  }
}
