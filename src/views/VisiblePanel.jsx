import React from 'react';

// reactstrap components

const isNil = require( 'lodash/isNil' );

require( 'moment/locale/fr' );

export const VisiblePanel = ( props ) => {


    return (
        <>
            <div className="content">
                <h1>{props.label.compta.generalAccounting}</h1>


            </div>

        </>
    );
};

export default VisiblePanel;