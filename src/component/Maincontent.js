import React from 'react';

import Mainbanner from './mainbanner/Mainbanner';
import Review from './review/Review';
import Store from './store/Store';
import Recipe from './recipe/Recipe';
import Map from './map/Map';
import Form from './form/Form';

function Maincontent() {
    return (
        <>
            <Mainbanner />
            <Review />
            <Store />
            <Recipe />
            <Map />
            <Form />
        </>
    );
}

export default Maincontent;

