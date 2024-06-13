import React from 'react';

export const Button = ({ name, onClick }) => {
  const buttonStyle = {
    backgroundColor: '#007BFF', // Change the background color as needed
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} className='btn btn-primary btn-md' onClick={onClick}>
      {name}
    </button>
  );
};

