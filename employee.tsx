// Bariso's Code

import React from 'react';


export default function Item(props) {
    return (

        <li className="bg-pink-200 p-4 m-4">
            <h2 className="font-bold text-blue-900"> {props.firstName}</h2>
            <p className="text-gray-600">
                <span className="font-bold"> Buy {props.lastName} in {props.department}</span></p>
        </li>

    );
}