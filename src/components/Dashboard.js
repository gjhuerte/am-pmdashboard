import React, { Component } from 'react';
import Navigation from './partials/Navigation';
import Sidebar from './partials/Sidebar';

class Dashboard extends Component {
    state = {}
    render() { 
        return (
            <div className="bg-blue-100">
                <Navigation />

                <div className="flex flex-row">
                    <Sidebar />
                    <div className="flex-1"></div>
                </div>
            </div>
        );
    }
}
 
export default Dashboard;