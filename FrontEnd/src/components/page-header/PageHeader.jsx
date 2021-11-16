import React from 'react';

import './page-header.scss';

import bg from '../../assets/footer-bg.jpg';

// This page is to get the heading for the movie wheather it is movies /  tv / Trending Movies ....


const PageHeader = props => {
    console.log(props)
    return (
        <div className="page-header" style={{backgroundImage: `url(${bg})`}}>
            <h2>{props.children}</h2>
        </div>
    );
}


export default PageHeader;
