import React, { Component } from 'react';
import NavigationComponent from '../../components/navigation';
import EventCard from '../../components/event_card';

export default class Events extends Component {
    state = {
    }
    render () {
        return([
            <NavigationComponent />,
            <main role="main" class="container">
                <div class="home">
                    <div class="row">
                        <div class="col col-lg-6 d-flex justify-content-start align-items-top pt-5">
                            <div class="jumbotron">
                                <h1>Upcoming Events</h1>
                                <EventCard />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        ]
            
        )
    }
}

