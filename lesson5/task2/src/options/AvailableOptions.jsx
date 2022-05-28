import React from 'react';
import { connect } from 'react-redux';
import { availableOptionsSelector } from './options.selectors.js';
import Options from './Options.jsx';
import { toogleOption } from './options.actions.js';

const mapState = state => {
  return {
    options: availableOptionsSelector(state),
  };
};

const mapDispatch = {
  moveOption: toogleOption,
};

export default connect(mapState, mapDispatch)(Options);
