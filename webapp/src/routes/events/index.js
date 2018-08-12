import React, { Component } from 'react';
import fetch from 'unfetch';
import EventCard from '../../components/event_card';
import ProgressBar from '../../components/progress_bar';

export default class Events extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isLoading: false,
    };
  }

    state={
      events: false,
    }

    componentDidMount() {
      this.setState({ isLoading: true });

      fetch('https://wiggling.now.sh/events')
        .then(response => response.json())
        .then(events => this.setState({ events, isLoading: false }));
    }

    render() {
      const { events, isLoading } = this.state;
      if (isLoading) {
        return <ProgressBar />;
      }
      return (
        <main role="main" className="container">
          <div className="home">
            <div className="row">
              <div className="col col-lg-6 d-flex justify-content-start align-items-top pt-5">
                <div className="jumbotron">
                  <h1>Upcoming Events</h1>
                    {events &&
                    events.map(event=>(
                        <EventCard key={event._id} event={event}/>
                    ))
                    }
                </div>
              </div>
            </div>
          </div>
        </main>
      )
    }
}

