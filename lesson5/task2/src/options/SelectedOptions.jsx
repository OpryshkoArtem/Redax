import React from 'react';
import { connect } from 'react-redux';
import { selectedOptionsSelector } from './options.selectors.js';
import Options from './Options.jsx';
import { toogleOption } from './options.actions.js';

const mapState = state => {
  return {
    options: selectedOptionsSelector(state),
  };
};

const mapDispatch = {
  moveOption: toogleOption,
};

export default connect(mapState, mapDispatch)(Options);
