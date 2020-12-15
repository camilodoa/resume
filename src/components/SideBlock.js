import React from 'react';

export default function SideBlock ({title, list}) {
    return (
        <div className="my-2">
            <b>{title}</b>
            <ul>
            {list.map((item, index) => (
                <li key={'SideBlockItem' + index}>{item}</li>
            ))}
            </ul>
        </div>
    )
}
