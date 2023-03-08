import tag from './uct_website2.png';
import './Page.css';
import React from 'react';

class UnderConstructionPage extends React.Component {
    render () {
        return (
            <div className="Background bg1">
                <img src={tag} className="uct" alt="Something better for this website is coming soon!" />
            </div>
        );
    }
}

export default UnderConstructionPage;