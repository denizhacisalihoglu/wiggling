import React, { Component } from 'react';
import fetch from 'unfetch';
import Profile from '../profile';

export default class Events extends Component {
  state = {
    organizer: false,
  }

  componentDidMount() {
    const { organizer } = this.props;
    fetch(`https://wiggling.now.sh/company/${organizer}`)
      .then(r => r.json())
      .then(data => this.setState({ organizer: data }));
  }

  render() {
    const { name, dates, place } = this.props.event;
    const { organizer } = this.state;
    const eventDate = new Date(dates.starts);
    return (
      <div className="card event-card shadow bg-white rounded border-0">
        <img className="card-img-top" src={`/img/profiles/event-${place}.svg`} alt="host" />
        <div className="card-body">
          <h5 className="card-title event-name">
            {name}
          </h5>
          <h6 className="organizer">
            {organizer && organizer.name}
          </h6>
          <div className="datetime">
            {eventDate.getDate()}
            { eventDate.getMonth() + 1}
            /
            { eventDate.getFullYear()} &nbsp;
            {place.toUpperCase()}
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
    )
  }
}