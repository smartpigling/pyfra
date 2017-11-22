import React, { Component } from "react";
import PropTypes from "prop-types";
import { Spin } from "antd";

export class Loading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="spin">
        <Spin spinning={this.props.isFetch} size="default" />
      </div>
    );
  }
}
