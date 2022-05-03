import React from 'react';
import PropTypes from 'prop-types';

// Renders the header for the class
function SectionHeader({ header }) {
    return(
        <div className="section-intro-container">
            <h1>{header}</h1>
        </div>
    );
}

// Ensures 'header' variable is a string
SectionHeader.propTypes = {
    header: PropTypes.string.isRequired
}

export default SectionHeader