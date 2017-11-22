import React, { Component } from 'react';
import PropTypes, { func } from "prop-types";
import { Select } from 'antd';


export default class Picker extends Component{
  render() {
    const { value, onChange, options, id } = this.props;

    function handerChange(val){
      onChange(val, id);
    }

    return (
        <div className="select-container">
          <Select onChange={handerChange} value={value} style={{width:120}}>
            {
              options.map(option =>
                <Option value={option} key={option}>
                  {option}
                </Option>
              )
            }
          </Select>
        </div>
    );
  }
}


Picker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.number,
}
