import React from 'react';
import { Helmet } from 'react-helmet';
import titleLogo from '../../Images/titleLogo.svg';

function Title() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Grow Food Cratering</title>
                <link rel="icon" href={titleLogo} />
            </Helmet>
        </div>
    );
}

export default Title;
