import React from 'react';

export default ({ profileImage, numOfAttendies }) => (
  <div className="profile rounded">
    {
      numOfAttendies ? <span className="count">+{numOfAttendies}</span> : <img src={profileImage} alt="User" />
    }
  </div>
);
