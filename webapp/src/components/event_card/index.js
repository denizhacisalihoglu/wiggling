import React, { Component } from 'react';
import Profile from '../profile';

export default ({ eventName, organizer, eventTime, eventPlace, profileImage, numOfAttendies }) => (
  <div className="card event-card shadow bg-white rounded border-0">
    <img className="card-img-top" src="/img/profiles/event-indoor.svg" alt="Card cap" />
    <div className="card-body">
      <h5 className="card-title event-name">
        {eventName}
      </h5>
      <h6 className="organizer">
        {organizer}
      </h6>
      <div className="datetime">
        {eventTime} {eventPlace}
      </div>
      <div className="attendies">
        <div className="profiles">
          <Profile profileImage='./img/profiles/anon-user.svg' />
          <Profile numOfAttendies='23' />
        </div>
        <span className="attending">
          people are attending
        </span>
      </div>
    </div>
  </div>
);
