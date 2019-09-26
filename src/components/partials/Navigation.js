import React, { Component } from 'react';
import logo from '../../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
} from '@fortawesome/free-solid-svg-icons';

class Navigation extends Component {
    state = {}
    render() { 
        return (
            <nav className="w-auto flex flex-row justify-between items-center p-10">
                <div className="flex-initial flex flex-row justify-center items-center">
                    <div className="mr-10">
                        <img 
                            className="h-10 w-10"
                            alt="Brand" 
                            src={logo} />
                        <span></span>
                    </div>

                    <div className="flex flex-row bg-white px-8 py-3 rounded-lg">
                        <button
                            className="text-gray-300 mr-5">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        <input
                            type="text"
                            placeholder="Search for what you need"
                            className="w-screen max-w-sm" />
                    </div>

                    <ul className="flex flex-row">
                        <li className="text-sm font-extrabold text-blue-500 ml-10 mr-5">
                            <a href="/">
                                Inbox
                            </a>
                        </li>
                        <li className="text-sm font-extrabold text-blue-500 mr-10 ml-5">
                            <a href="/">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-row items-baseline">
                    <img
                        className="h-10 w-10 rounded-full content-cover" 
                        alt="Profile"
                        src="https://images.pexels.com/photos/2755075/pexels-photo-2755075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    <div className="bg-blue-600 h-3 w-3 rounded-full -ml-2"></div>
                </div>
            </nav>
        );
    }
}
 
export default Navigation;