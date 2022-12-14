import React from 'react';

function ColorBox({ config }) {
  const styles = {
    position: 'absolute',
    top: config?.top || 'initial',
    left: config?.left || 'initial',
    backgroundColor: config?.color || '#e49102',
    width: config?.width || '100px',
    height: config?.height || config?.size || '100px',
    zIndex: config?.zIndex || 2
  };

  return <div className="ColorBoxContainer" style={styles}></div>;
}

export default ColorBox;
