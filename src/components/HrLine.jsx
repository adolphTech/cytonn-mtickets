import React from 'react';

const HrLine = ({ title }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center',color:"#2F333A" }}>
      <h1
        className="text-center mt-3 mb-3"
        style={{ fontFamily: 'Rubik, sans-serif',fontSize:"24px",fontWeight:"500",
       }}
      >
        <h3>{title}</h3>
      </h1>

      <hr
        style={{
          background: '#6F38C5',
          height: '2px',
          border: 'none',
          flexGrow: 1, // This will make the hr take up the remaining space
          marginLeft: '30px',
        }}
      />
    </div>
  );
};

export default HrLine;
