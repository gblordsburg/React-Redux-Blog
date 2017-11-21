import React, { Component, PropTypes } from 'react';


const renderField = ({ input, label, type, meta: { touched, error, invalid, warning } }) => (
  <div className="text-input">
    <label  className="control-label">{label}</label>
    <div>
      <input {...input} className="form-control"  placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  </div>
)

export default renderField;
