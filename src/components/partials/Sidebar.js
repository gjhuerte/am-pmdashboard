import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBook,
    faIdCard,
    faTree,
    faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';

class Sidebar extends Component {
    state = {}
    render() { 
        return (
            <div className="py-10 px-3 bg-blue-200 mx-5 mt-20 mb-20 rounded-lg">
                <ul className="flex flex-col">
                    <li className="px-1 py-5">
                        <a 
                            className="text-white p-2 rounded bg-blue-500"
                            href="/">
                            <FontAwesomeIcon icon={faLayerGroup} />
                        </a>
                    </li>
                    <li className="px-1 py-5">
                        <a 
                            className="text-blue-900 p-2"
                            href="/">
                            <FontAwesomeIcon icon={faBook} />
                        </a>
                    </li>
                    <li className="px-1 py-5">
                        <a 
                            className="text-blue-900 p-2"
                            href="/">
                            <FontAwesomeIcon icon={faIdCard} />
                        </a>
                    </li>
                    <li className="px-1 py-5">
                        <a 
                            className="text-blue-900 p-2"
                            href="/">
                            <FontAwesomeIcon icon={faTree} />
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default Sidebar;