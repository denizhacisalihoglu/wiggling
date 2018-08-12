import React, { Component } from 'react';
import NavigationComponent from '../../components/navigation';

export default class Home extends Component {
    componentWillMount() {
        document.querySelector('body').className = 'home';
    }
    componentWillUnmount() {
        document.querySelector('body').className = '';
    }
    state = {
    }
    render () {
        return([
            <NavigationComponent />,
            <main role="main" class="container">
                <div class="home">
                    <div class="row">
                        <div class="col col-lg-6 d-flex justify-content-start align-items-center">
                            <div class="jumbotron">
                                <h1>FOLLOW DANCE EVENTS NEAR YOU</h1>
                                <h3>and invite your friends to dance!</h3>
                                <p class="lead">Wiggling is an event app that shows you the upcoming dance events near your region. You can also
                                    invite your friends for a specific event you want to attend.</p>
                                <a class="btn btn-lg btn-primary" href="#" role="button">Download App</a>
                                <a class="text-link ml-3" href="#">Submit new event</a>
                            </div>
                        </div>
                        <div class="col col-lg-6 d-flex justify-content-start align-items-center">
                            <div class="unicorn"></div>
                        </div>
                    </div>
                </div>
            </main>
        ]
            
        )
    }
}

