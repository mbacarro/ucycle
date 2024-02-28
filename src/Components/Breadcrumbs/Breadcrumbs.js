import React from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function Breadcrumbs() {
    const location = useLocation()

    let currLink = ''

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '' && crumb !== 'category' && crumb !== 'item')
        .map((crumb, index, array) => {
            currLink =+ `/${crumb}`

            return (
                <>
                    <Link to={currLink}>{crumb.charAt(0).toUpperCase() + crumb.slice(1)}</Link>
                    {index < array.length - 1 && <span className='mx-1'>/</span>}
                </>
            )
        })

    return (
        <div className='flex mx-40 mt-20'>
            <Link to='/'>Home</Link>
            <span className='mx-1'>/</span>
            {crumbs}
        </div>
    );
};
