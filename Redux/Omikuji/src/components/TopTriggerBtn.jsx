import React from 'react';
import { PropTypes } from 'prop-types';

const TopTriggerBtn = ({ onClick }) => {
  return (
    <button onClick={() => onClick()}>start</button>
  );
};

TopTriggerBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default TopTriggerBtn;
