import React from 'react';

const Link = ({nav}) => {
    return (
        <li className='mr-5 hover:bg-amber-500'>
            <a href={nav.url}>{nav.name}</a>
        </li>
    );
};

export default Link;