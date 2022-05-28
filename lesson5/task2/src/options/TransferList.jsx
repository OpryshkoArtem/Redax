import React from 'react';
import Options from './Options.jsx';

const TransferList = () => {
  return (
    <div className="transfer-list">
      <Options title="Available option" />
      <Options title="Selected option" />
    </div>
  );
};

export default TransferList;
